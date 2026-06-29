# Fiyinpresidan CBT - Deployment Guide

## Vercel Deployment (Frontend)

### Steps:
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your fiyinpresidan repository
5. Configure project:
   - Framework: Create React App
   - Root Directory: frontend
   - Environment Variables:
     ```
     REACT_APP_API_URL=https://your-backend-url/api
     ```
6. Click Deploy

## Railway/Heroku Deployment (Backend)

### Railway:
1. Go to https://railway.app
2. Create new project from GitHub
3. Select fiyinpresidan repo
4. Configure root directory: backend
5. Add environment variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fiyinpresidan
   JWT_SECRET=your_secret_key
   NODE_ENV=production
   CLIENT_URL=https://your-frontend-url
   ```
6. Deploy

## MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Use in MONGODB_URI

## Final Steps

1. Update frontend API URL after backend deployment
2. Test all features
3. Monitor logs for errors

