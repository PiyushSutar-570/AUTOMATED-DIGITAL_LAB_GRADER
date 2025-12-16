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


📝 Installation & Setup
git clone https://github.com/your-username/automated-digital-lab-grading-system.git
cd automated-digital-lab-grading-system
npm install

Analytics dashboard for faculty

👨‍💻 Author
Piyush Sutar
B.Tech CSE (AI & ML)
Aspiring Full-Stack Developer
