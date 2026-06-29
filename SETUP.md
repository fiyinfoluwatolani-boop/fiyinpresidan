# Setup Instructions for Fiyinpresidan CBT

## Quick Setup Guide

### Step 1: Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fiyinpresidan
JWT_SECRET=your_super_secret_key_change_this_in_production
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

Start MongoDB (if local):
```bash
mongod
```

Start Backend:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

### Step 2: Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file in frontend folder:
```
REACT_APP_API_URL=http://localhost:5000/api
```

Start Frontend:
```bash
npm start
```

## Browser Access
- Open: http://localhost:3000
- Backend API: http://localhost:5000/api

## Features Overview

✅ **User Authentication**
- Register new users
- Login with email/password
- JWT token-based authentication

✅ **Exam Management**
- 7 university courses
- 40 questions per course
- 30-minute timer
- Multiple choice answers

✅ **Results & Review**
- Instant score calculation
- Detailed answer review
- Correct/incorrect tracking
- Explanations for answers

## Courses Available
1. GST 112 - Nigerian Peoples and Culture
2. MTH 132 - Elementary Mathematics II
3. PHY 102 - General Physics II
4. COS 102 - Introduction to Computer Programming
5. CHM 102 - Chemistry
6. STA 112 - Statistics
7. BIO 101 - Biology

## Troubleshooting

### Port Already in Use
```bash
# Change port in backend/.env
PORT=5001
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- For Atlas: Use connection string from MongoDB Atlas

### Frontend API Errors
- Check backend is running on port 5000
- Verify REACT_APP_API_URL in frontend/.env
- Check browser console for CORS errors

## Deployment

### Vercel (Frontend)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Railway/Heroku (Backend)
1. Connect to GitHub
2. Set environment variables
3. Deploy

## Support
For issues, check the GitHub repository or contact the developer.
