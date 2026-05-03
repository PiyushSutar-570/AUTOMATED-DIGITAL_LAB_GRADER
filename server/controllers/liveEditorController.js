// controllers/liveEditorController.js
// ✅ Using JDoodle — 100% free (200 runs/day), no credit card
// Register at: https://www.jdoodle.com → API → copy clientId & clientSecret
import axios from "axios";
import TestCase from "../models/testCaseModel.js";
import Submission from "../models/submissionModel.js";

// ── JDoodle config ────────────────────────────────────────────────────────────
const JDOODLE_URL = "https://api.jdoodle.com/v1/execute";

// JDoodle language slug + version index
const JDOODLE_LANG_MAP = {
  python:     { language: "python3",   versionIndex: "3" },
  python3:    { language: "python3",   versionIndex: "3" },
  javascript: { language: "nodejs",    versionIndex: "4" },
  node:       { language: "nodejs",    versionIndex: "4" },
  cpp:        { language: "cpp17",     versionIndex: "0" },
  "g++":      { language: "cpp17",     versionIndex: "0" },
  c:          { language: "c",         versionIndex: "5" },
  java:       { language: "java",      versionIndex: "4" },
};

/**
 * Runs code on JDoodle.
 * Returns { output, statusCode, memory, cpuTime }
 */
const runOnJDoodle = async (langConfig, code, stdin = "") => {
  const { data } = await axios.post(JDOODLE_URL, {
    script: code,
    stdin,
    language: langConfig.language,
    versionIndex: langConfig.versionIndex,
    clientId: process.env.JDOODLE_CLIENT_ID,
    clientSecret: process.env.JDOODLE_CLIENT_SECRET,
  });
  return data; // { output, statusCode, memory, cpuTime }
};

// Flatten JDoodle output
const flattenOutput = (data) => (data.output || "").trim();

// ── Controllers ──────────────────────────────────────────────────────────────

export const gradeSubmission = async (req, res) => {
  let { assignmentId, code, language, studentName } = req.body;
  if (!assignmentId || !code || !language || !studentName) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const langConfig = JDOODLE_LANG_MAP[language?.toLowerCase()];
  if (!langConfig) {
    return res.status(400).json({ message: `Unsupported language: ${language}` });
  }

  const cases = await TestCase.find({ assignment: assignmentId }).sort({ createdAt: 1 });
  if (cases.length === 0) return res.status(404).json({ message: "No test cases found" });

  let totalScore = 0;
  const maxScore = cases.reduce((a, c) => a + (c.points || 1), 0);
  const results = [];

  for (const tc of cases) {
    try {
      const data = await runOnJDoodle(langConfig, code, tc.inputText);
      const actualOut = flattenOutput(data);
      const expectedOut = (tc.expectedText || "").trim();

      const norm = (s) => s.replace(/\r\n/g, "\n").trim();
      const passed = norm(actualOut) === norm(expectedOut);
      const pts = passed ? (tc.points || 1) : 0;

      totalScore += pts;
      results.push({
        input: tc.inputText,
        expected: expectedOut,
        output: actualOut,
        passed,
        points: pts,
      });
    } catch (err) {
      console.error("JDOODLE ERROR:", err.response?.status, err.response?.data || err.message);
      results.push({
        input: tc.inputText,
        expected: (tc.expectedText || "").trim(),
        output: "❌ Runtime/Compile error",
        passed: false,
        points: 0,
      });
    }
  }

  const status = totalScore >= Math.ceil(maxScore * 0.5) ? "Passed" : "Failed";
  await Submission.create({
    assignment: assignmentId,
    studentName,
    code,
    language,
    score: totalScore,
    status,
  });

  return res.json({ totalScore, maxScore, results });
};

export const runCode = async (req, res) => {
  const { code, language, stdin = "" } = req.body;

  const langConfig = JDOODLE_LANG_MAP[language?.toLowerCase()];
  if (!langConfig) {
    return res.status(400).json({ output: `❌ Unsupported language: ${language}` });
  }

  try {
    const data = await runOnJDoodle(langConfig, code, stdin);
    const out = flattenOutput(data);
    res.json({ output: out || "✅ No output." });
  } catch (err) {
    console.error("JDOODLE ERROR:", err.response?.status, err.response?.data || err.message);
    res.status(500).json({ output: "❌ Error executing code" });
  }
};

// ⬇️ stub — wired for future use
export const submitCode = async (req, res) => {
  const { code, language } = req.body;
  const results = [
    { input: "5,3", expected: "8", output: "8", passed: true, points: 1 },
    { input: "2,2", expected: "4", output: "4", passed: true, points: 2 },
    { input: "10,20", expected: "30", output: "30", passed: true, points: 2 },
  ];
  const totalScore = results.reduce((acc, r) => acc + r.points, 0);
  res.json({ totalScore, results, meta: { language, length: code?.length || 0 } });
};
