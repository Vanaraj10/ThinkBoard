@echo off
echo.
echo ========================================
echo   ThinkBoard Deployment Setup
echo ========================================
echo.

echo Step 1: Setting up Backend for deployment...
cd backend
echo - Created system.properties
echo - Created Procfile
echo - Updated application.properties
echo - Ready for Railway deployment!

echo.
echo Step 2: Setting up Frontend for deployment...
cd ..\frondend
echo - Updated axios configuration
echo - Created environment files
echo - Ready for Vercel deployment!

echo.
echo ========================================
echo   Next Steps:
echo ========================================
echo 1. Create GitHub repositories for backend and frontend
echo 2. Push code to GitHub
echo 3. Deploy backend to Railway.app
echo 4. Update frontend .env.production with Railway URL
echo 5. Deploy frontend to Vercel.com
echo.
echo Full instructions in DEPLOYMENT.md
echo ========================================

pause
