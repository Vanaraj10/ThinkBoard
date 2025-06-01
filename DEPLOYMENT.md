# ThinkBoard Deployment Guide

## 🚀 Deploy Backend to Railway

### Prerequisites
1. Create a GitHub account if you don't have one
2. Create a Railway account at https://railway.app
3. Push your code to GitHub

### Step 1: Push to GitHub
```bash
# Initialize git repository (if not already done)
cd backend
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/thinkboard-backend.git
git push -u origin main
```

### Step 2: Deploy on Railway
1. Go to https://railway.app
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your backend repository
6. Railway will automatically detect it's a Java Spring Boot app
7. Set environment variables:
   - No additional variables needed (MongoDB URI is in application.properties)
8. Deploy will start automatically
9. Note down your Railway URL (e.g., `https://your-app-name.railway.app`)

## 🌐 Deploy Frontend to Vercel

### Step 1: Update Environment Variable
1. Edit `frondend/.env.production`
2. Replace `https://your-backend-url.railway.app/api` with your actual Railway URL + `/api`

### Step 2: Push Frontend to GitHub
```bash
cd frondend
git init
git add .
git commit -m "Initial commit"

# Create another repository for frontend
git remote add origin https://github.com/YOUR_USERNAME/thinkboard-frontend.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your frontend repository
5. Vercel will auto-detect it's a Vite app
6. Add environment variable:
   - Name: `VITE_API_URL`
   - Value: `https://your-backend-railway-url.railway.app/api`
7. Click Deploy
8. Note down your Vercel URL

## 🔧 Alternative: Deploy Both on Render

### Backend on Render
1. Go to https://render.com
2. Create account and connect GitHub
3. Click "New" → "Web Service"
4. Select backend repository
5. Settings:
   - Name: thinkboard-backend
   - Environment: Java
   - Build Command: `./mvnw clean install -DskipTests`
   - Start Command: `java -jar target/backend-0.0.1-SNAPSHOT.jar`
6. Add environment variable:
   - Key: `PORT`
   - Value: `10000` (default for Render)
7. Deploy

### Frontend on Render
1. Click "New" → "Static Site"
2. Select frontend repository
3. Settings:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
4. Add environment variable:
   - Key: `VITE_API_URL`
   - Value: `https://your-backend-render-url.onrender.com/api`
5. Deploy

## 🎯 Quick Deployment (Recommended)

### Option 1: Railway + Vercel (Easiest)
1. **Backend**: Railway (automatic Java detection)
2. **Frontend**: Vercel (automatic Vite detection)
3. **Database**: Already on MongoDB Atlas ✅

### Option 2: All on Render
1. **Backend**: Render Web Service
2. **Frontend**: Render Static Site
3. **Database**: Already on MongoDB Atlas ✅

## 🔑 Important Notes

1. **CORS**: Backend is configured to allow all origins for simplicity
2. **Environment Variables**: Make sure to update the frontend API URL
3. **Build Time**: First deployment might take 5-10 minutes
4. **Free Tiers**: Both Railway and Vercel offer generous free tiers
5. **Custom Domain**: You can add custom domains later

## 🐛 Troubleshooting

### Backend Issues
- Check Railway logs for Java errors
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Verify environment variables are set

### Frontend Issues
- Check browser console for API connection errors
- Verify VITE_API_URL points to deployed backend
- Ensure build command succeeds

### CORS Issues
- Backend CORS is configured for all origins
- If issues persist, update NoteController.java CORS settings

## 📱 After Deployment

1. Test all functionality:
   - Create notes
   - View notes
   - Edit notes
   - Delete notes
2. Share your live URLs!
3. Monitor usage on platform dashboards
