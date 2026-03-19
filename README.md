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

#Screenshots : 

<img width="1918" height="917" alt="image" src="https://github.com/user-attachments/assets/018542c5-6528-46cc-8a9b-7b2edb743d91" />

<img width="1917" height="922" alt="image" src="https://github.com/user-attachments/assets/a8fe19d3-3924-4b42-8e69-bbd10ce55e4c" />

<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/e7fe343d-77cf-48f6-a1db-d249c4869d56" />

<img width="1889" height="920" alt="image" src="https://github.com/user-attachments/assets/cfc7edda-36df-4ac6-b8c2-1535dfaee1d9" />

<img width="1919" height="923" alt="image" src="https://github.com/user-attachments/assets/d7c7330b-fc3f-498d-8798-d2ffb98ab63f" />

<img width="1905" height="859" alt="image" src="https://github.com/user-attachments/assets/8ca57e90-5ef6-4523-a738-ed4574a2a8b1" />

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

#Live preview is here : https://automated-digital-lab-grader-1.onrender.com

📦 Installation & Setup
# Clone the repository
git clone https://github.com/PiyushSutar-570/AUTOMATED-DIGITAL_LAB_GRADER.git

## Frontend && Backend setup
```bash
#Backend setup
cd server
npm install
node server.js

#Frontend setup
cd client
npm install
npm run dev

#Create a .env file in client/:
VITE_API_URL = backend_url

#Create a .env file in server/:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT = 5000
NODE_ENV = production
FRONTEND URL = your_frontend_url
```

👤 Author
Piyush Sutar
B.Tech CSE (AI & ML)
Full-Stack Developer | Strong DSA & System Design
