# 🎓 Fiyinpresidan CBT - Computer-Based Test Platform

A comprehensive Computer-Based Testing platform for university courses with 40 questions per course, 30-minute timer, and detailed answer review.

## ✨ Features
- 🎯 40 questions per course with multiple choice answers
- ⏱️ 30-minute timer with countdown
- ✅ Automatic answer tracking and scoring
- 📊 Detailed review of answers after submission
- 📱 Responsive design (Mobile, Tablet, Desktop)
- 💾 Results saved to database
- 🎓 Support for 7 university courses

## 📚 Courses Included
1. **GST 112** - Nigerian Peoples and Culture (40 questions)
2. **MTH 132** - Elementary Mathematics II (40 questions)
3. **PHY 102** - General Physics II (40 questions)
4. **COS 102** - Introduction to Computer Programming (40 questions)
5. **CHM 102** - Chemistry (40 questions)
6. **STA 112** - Statistics (40 questions)
7. **BIO 101** - Biology (40 questions)

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, JWT Authentication
- **Database**: MongoDB
- **Deployment**: Vercel (Frontend), Heroku/Railway (Backend)

## 📦 Project Structure
```
fiyinpresidan/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Context API
│   │   ├── services/        # API calls
│   │   └── App.js
│   └── package.json
├── backend/                  # Node.js/Express server
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── controllers/         # Route handlers
│   ├── middleware/          # Custom middleware
│   ├── data/                # Question data
│   └── server.js
└── docs/                    # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

**1. Clone & Setup Backend**
```bash
git clone https://github.com/fiyinfoluwatolani-boop/fiyinpresidan.git
cd fiyinpresidan/backend
npm install
```

**2. Create `.env` file** (backend)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fiyinpresidan
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

**3. Setup Frontend**
```bash
cd ../frontend
npm install
```

**4. Create `.env` file** (frontend)
```
REACT_APP_API_URL=http://localhost:5000/api
```

**5. Start the application**
```bash
# Terminal 1 - Backend
cd backend && npm start

# Terminal 2 - Frontend
cd frontend && npm start
```

The application will open at `http://localhost:3000`

## 📖 Usage

1. **Enter Details**: Input your name and select a course
2. **Read Instructions**: Review exam guidelines
3. **Take Exam**: Answer 40 questions in 30 minutes
4. **Submit**: Submit your answers before time expires
5. **Review**: See your score and review correct/incorrect answers
6. **Download Results**: Export results as PDF

## 🌐 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect Vercel to your repository
3. Set `REACT_APP_API_URL` environment variable
4. Deploy!

### Backend (Railway/Heroku)
1. Set environment variables
2. Deploy from GitHub
3. Update frontend API URL

## 📝 License
MIT

## 👨‍💻 Author
Created with ❤️ for examination excellence

---
**Last Updated**: June 2026
