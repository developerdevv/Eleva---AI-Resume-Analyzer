Eleva – AI Inspired Resume Analyzer

Eleva is a full stack resume analysis web application designed to help users improve their resumes and understand ATS (Applicant Tracking System) compatibility. The project provides authentication, OTP-based password recovery, resume upload functionality, and dynamic resume analysis simulation through a modern and responsive user interface.

Features

- User Signup and Login System
- Protected Dashboard Access
- Forgot Password with OTP Verification
- Resume Upload System
- Dynamic Resume Analysis
- ATS Score Generation
- Detected Skills Display
- Persistent Authentication using Context API
- Responsive UI using Tailwind CSS
- Global Navbar and Footer
- Dynamic Dashboard and User Profile Section

---

Tech Stack

Frontend

- React.js
- Tailwind CSS
- React Router DOM
- Axios

Backend

- Node.js
- Express.js

Database

- MongoDB

Other Tools / Libraries

- Nodemailer
- React Context API
- LocalStorage

---

Project Structure

ELEVA/
├── backend/
│   ├── server.js
│   ├── sendMail.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js

---

Authentication Flow

Signup

- User enters name, email, and password
- Backend validates input
- User data is stored in MongoDB

Login

- User credentials are verified
- Authentication state is stored using Context API and localStorage

Forgot Password

- Backend generates a 6-digit OTP
- OTP is sent to the user using Nodemailer and Gmail SMTP
- User verifies OTP through frontend form

---

Resume Analysis Workflow

1. User uploads resume (PDF/DOCX)
2. Frontend simulates analysis loading
3. Dynamic analysis data is generated
4. User receives:
   - ATS Score
   - Resume Score
   - Detected Skills

Currently the analysis section uses simulated dynamic data to prototype frontend and workflow behavior. The architecture is designed so real AI resume parsing and NLP-based analysis APIs can be integrated in future versions.

---

Installation

Clone Repository

git clone https://github.com/developerdevv/Eleva---AI-Resume-Analyzer.git

---

Frontend Setup

cd client
npm install
npm run dev

---

Backend Setup

cd backend
npm install
node server.js

---

Environment Variables

Create ".env" file inside backend folder:

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

---

Future Improvements

- Real AI Resume Parsing
- PDF Content Extraction
- JWT Authentication
- Password Hashing using bcrypt
- Resume History Storage
- Real ATS Keyword Analysis
- Cloud Deployment

---

Learning Outcomes

This project helped in understanding:

- Full Stack Web Development
- Frontend-Backend Integration
- REST API Development
- MongoDB Database Operations
- Authentication Systems
- OTP Verification Flow
- React State Management
- Protected Routing
- Dynamic UI Rendering

---

Project Photos- 
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/bdcc0bc8-df45-4f9f-ab78-3461b40d2a79" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/9450950c-36fa-482e-8ed9-22987dc4420e" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/762c6dc9-57f2-4918-b943-14bf797a6004" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/40ed893a-3984-41db-b961-326399b94a44" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/593afa29-84bf-44cd-8bd5-3c2f20d8b93b" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/b74bed40-78c1-4657-aa28-66cde55939cd" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/7d214d8c-8c57-49da-8f37-01ff1b379c14" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/2e08336e-26ed-4d6a-b331-10d388a4f907" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/c68cf10a-de52-496a-9edc-d20bf4c1fc21" />
<img width="1600" height="1041" alt="image" src="https://github.com/user-attachments/assets/c33d5e23-43da-4ff6-b886-8a62d29d42dc" />












Author

Developed by Dev Sharma.
