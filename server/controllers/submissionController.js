import Submission from "../models/submissionModel.js";
import Assignment from "../models/assignmentModel.js";

//Get all submissions
export const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find().populate("assignment");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions" });
  }
};

//Submit code for grading

//Get submissions by student name
export const getSubmissionsByStudent = async (req, res) => {
  try {
    const submissions = await Submission.find({ studentName: req.params.studentName }).populate("assignment");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student submissions" });
  }
};
