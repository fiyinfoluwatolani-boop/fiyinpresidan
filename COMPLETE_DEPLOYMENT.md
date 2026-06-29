# Fiyinpresidan CBT - Complete Deployment Guide

## Step-by-Step Deployment Instructions

### STEP 1: Set Up MongoDB Atlas (Database)

1. Go to https://www.mongodb.com/cloud/atlas
2. Click **"Try Free"** or login
3. Create an account if needed
4. Click **"Create a Deployment"**
5. Select **"Shared"** (Free tier)
6. Choose region closest to you
7. Click **"Create"**
8. Set username and password (save these!)
9. Click **"Choose a Connection Method"**
10. Select **"Drivers"** → **"Node.js"**
11. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/myFirstDatabase`)
12. Replace `myFirstDatabase` with `fiyinpresidan`
13. **SAVE THIS URL** - you'll need it soon!

---

### STEP 2: Deploy Backend to Railway

1. Go to https://railway.app
2. Click **"Start a New Project"**
3. Select **"Deploy from GitHub"**
4. Login to GitHub (if asked)
5. Select **fiyinpresidan** repository
6. Railway will ask for settings - click **"Configure"**
7. **Root Directory**: Set to `backend`
8. **Add Environment Variables** (click the button):
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/fiyinpresidan
   JWT_SECRET=use_a_random_long_string_here_like_abc123xyz789
   NODE_ENV=production
   CLIENT_URL=https://your-frontend-url.vercel.app
   ```
9. Click **"Deploy"**
10. Wait for green checkmark ✅
11. Go to **Settings** → find **"Domains"** section
12. You'll see a URL like: `https://fiyinpresidan-production.up.railway.app`
13. **SAVE THIS URL** - you need it for frontend!

---

### STEP 3: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** or login with GitHub
3. After login, click **"New Project"**
4. Select **fiyinpresidan** from your GitHub repos
5. Configure project:
   - **Framework**: React
   - **Root Directory**: `frontend`
   - Click **"Continue"**
6. **Environment Variables** section:
   - Add: `REACT_APP_API_URL` = `https://your-railway-backend-url/api`
   - (Example: `https://fiyinpresidan-production.up.railway.app/api`)
7. Click **"Deploy"**
8. Wait for deployment to complete ✅
9. You'll get a URL like: `https://fiyinpresidan.vercel.app`

---

### STEP 4: Update Backend with Frontend URL

1. Go back to https://railway.app
2. Select your **fiyinpresidan** project
3. Click on **backend** service
4. Go to **Variables** tab
5. Update `CLIENT_URL` to your Vercel URL:
   ```
   CLIENT_URL=https://fiyinpresidan.vercel.app
   ```
6. Save changes

---

## ✅ DONE! Your Website is Live!

**Share this link with your friends:**
```
https://fiyinpresidan.vercel.app
```

They can:
1. Open in Chrome (or any browser)
2. Click **"Get Started"** or **"Register"**
3. Create an account
4. Start taking exams!

---

## 🔧 Troubleshooting

### Backend not connecting?
- Check `MONGODB_URI` is correct in Railway
- Make sure MongoDB Atlas allows connections from anywhere (IP 0.0.0.0)
- Check backend logs in Railway dashboard

### Frontend showing "Cannot connect to API"?
- Verify `REACT_APP_API_URL` in Vercel is correct
- Make sure backend URL has `/api` at the end
- Redeploy frontend after updating env variables

### Login not working?
- Check JWT_SECRET is set in Railway
- Clear browser cache and try again
- Check browser console for errors (F12 key)

---

## 📱 Access Your Admin Dashboard

Monitoring your deployed app:

**Vercel Dashboard**: https://vercel.com/dashboard
- View frontend logs
- Monitor performance
- Redeploy if needed

**Railway Dashboard**: https://railway.app
- View backend logs
- Monitor database usage
- Manage environment variables

**MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
- View database data
- Monitor usage

---

## 🎉 You're All Set!

Your Fiyinpresidan CBT platform is now live and accessible worldwide!

**Live Website**: https://fiyinpresidan.vercel.app
**Total Setup Time**: ~15-20 minutes

Share with your friends and start testing! 🚀
