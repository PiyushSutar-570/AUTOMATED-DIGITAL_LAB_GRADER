import express from "express";
import {
  createSubmission,
  getSubmissionsByStudent,
} from "../controllers/submissionController.js";

const router = express.Router();

//Create a new submission
router.post("/submit", createSubmission);

//Get submissions by student name
router.get("/submit/:studentName", getSubmissionsByStudent);

export default router;