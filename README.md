📘 Automated Digital Lab Grading System

An end-to-end web application that automates the evaluation and grading of laboratory assignments submitted by students. The system reduces manual effort for instructors, ensures fair grading, and supports scalable digital lab management.

🚀 Features
👨‍🎓 Student

Secure authentication (JWT + cookies)

Upload lab assignments (PDF / text files)

View submission status and grades

Submission deadline enforcement

👩‍🏫 Faculty

View student submissions

Automatic evaluation of assignments

Manual override and feedback support

Grade publishing

🛠 Admin

Role-based access control

User and lab management

Secure file handling

⚙️ Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt.js

Multer (file uploads)

Frontend

React.js

Tailwind CSS

Axios

Other

RESTful APIs

Cookie-based authentication

Role-based authorization middleware

🧠 System Architecture

Students upload lab files via a secure interface

Files are processed and stored on the server

Evaluation logic automatically checks submissions

Grades are generated and stored in the database

Faculty can review and publish results

🔐 Security

Password hashing using bcrypt

HTTP-only cookies for JWT storage

Role-based authorization middleware

File type and size validation

Secure production cookie settings

📂 Project Structure
.
├── controllers/
│   ├── authController.js
│   └── gradingController.js
├── models/
│   └── userModel.js
├── routes/
│   ├── authRoutes.js
│   └── labRoutes.js
├── middleware/
│   └── requireRole.js
├── uploads/
├── config/
├── server.js
└── README.md

🧪 Scalability Considerations

Handles concurrent submissions from multiple students

Stateless authentication using JWT

Modular backend structure

Optimized file upload handling

Can be extended with cloud storage (AWS S3 / GCP)

📝 Installation & Setup
git clone https://github.com/your-username/automated-digital-lab-grading-system.git
cd automated-digital-lab-grading-system
npm install

Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development

Run the project
npm run dev

📈 Future Improvements

Plagiarism detection

AI-based grading support

Dockerization

Cloud file storage

Analytics dashboard for faculty

👨‍💻 Author

Piyush Sutar
B.Tech CSE (AI & ML)
Aspiring Full-Stack Developer

⭐ Why this project matters

This project demonstrates:

Real-world backend system design

Secure authentication & authorization

Scalable file handling

Practical application in academic environments
