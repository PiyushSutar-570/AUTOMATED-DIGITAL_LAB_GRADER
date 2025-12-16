🚀 Digital TA – Automated Digital Lab Grading System

A full-stack platform that automates programming lab evaluation with real-time code execution, instant feedback, analytics, and leaderboards.

📌 Problem Statement

Manual grading of programming labs in large university classes is time-consuming, inconsistent, and delays student feedback. Instructors spend more time validating syntax and edge cases than teaching core concepts, while students wait days for results.

Digital TA solves this by acting as an objective, real-time code judge, providing instant evaluation and performance insights for both students and instructors.

🎯 Key Features
👨‍🏫 Instructor Dashboard

1.Create programming assignments with title, deadline, and language support
2.Upload:
📄 Problem statement (PDF)
📥 Input test cases (input.txt)
📤 Expected outputs (output.txt)
3.Automatic test-case generation and scoring
4.View class-level analytics and leaderboards

🎓 Student Dashboard

1.View active, completed, and closed assignments
2.Access problem PDFs directly
3.Launch assignments in an in-browser live code editor
4.Submit solutions and receive instant, detailed feedback

💻 Live Coding Editor

1.Write and test code directly in the browser (Monaco Editor)
2.Supports Python, C++, and JavaScript
3.Run sample inputs before final submission
4.Execute code securely against all test cases

🧪 Automated Grading Engine

1.Executes student code using Piston API
2.Compares output against expected results

Generates:
1.Pass/fail per test case
2.Total score
3.Submission status

📊 Analytics & Leaderboard

1.Assignment-wise performance breakdown
2.Top-scoring students per assignment
3.Average scores and submission trends
4.Motivational leaderboard (optional anonymization)

🛠 Tech Stack

#Frontend
1.React.js
2.Monaco Code Editor
3.Tailwind CSS

#Backend
1.Node.js
2.Express.js
3.MongoDB
4.JWT Authentication
5.Code Execution
6.Piston API (Sandboxed multi-language execution)
7.File Handling
8.Multer (PDF & test case uploads)

📦 Installation & Setup
# Clone the repository
git clone https://github.com/PiyushSutar-570/AUTOMATED-DIGITAL_LAB_GRADER.git

## Frontend && Backend setup
```bash
#Backend setup
cd server
npm install
npm run dev

#Frontend setup
cd client
npm install
npm run dev

#Create a .env file in server/:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```
