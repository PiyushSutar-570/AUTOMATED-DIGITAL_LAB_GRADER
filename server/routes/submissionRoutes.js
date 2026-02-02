//submission routes.js
import express from "express";
import {
  getSubmissionsByStudent,
} from "../controllers/submissionController.js";

const router = express.Router();

//Create a new submission

//Get submissions by student name
router.get("/submit/:studentName", getSubmissionsByStudent);

export default router;