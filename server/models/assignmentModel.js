import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "No description provided",
    },
    language: {
      type: String,
      required: true,
      enum: ["python", "javascript", "cpp", "java"],
    },
    deadline: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    questionPdfUrl: {
      type: String,   
      required: true,
    },
    inputFileUrl: {
      type: String,   
      required: true,
    },
    outputFileUrl: {
      type: String,  
      required: true,
    },
    totalCases: {
      type: Number,
      default: 0,
    },
    completedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);