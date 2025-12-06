@echo off
echo ========================================
echo PUSHING RISHIKESH GATEWAY TO GITHUB
echo ========================================
echo.

echo Step 1: Checking current directory...
cd /d %~dp0
echo Current directory: %CD%
echo.

echo Step 2: Initializing Git repository...
git init
echo.

echo Step 3: Adding all files...
git add .
echo.

echo Step 4: Checking status...
git status
echo.

echo Step 5: Creating commit...
git commit -m "🚀 Initial commit: Complete Rishikesh Gateway Travel Website

✅ Angular 17 + Material Design + TailwindCSS
✅ Himalayan Blue & Orange Theme
✅ Tours, Gallery, Booking, Contact, Dashboard
✅ Responsive Design for All Devices
✅ Video Backgrounds, Currency/Language Selectors
✅ Social Media Integration, SEO Optimized
✅ Professional Animations & UX"
echo.

echo Step 6: Adding remote repository...
git remote add origin https://github.com/akshaybavara/RishikeshGateway.git
echo.

echo Step 7: Pushing to GitHub...
git push -u origin master
echo.

echo ========================================
echo 🎉 SUCCESS! PROJECT PUSHED TO GITHUB
echo ========================================
echo.
echo Repository: https://github.com/akshaybavara/RishikeshGateway
echo.
echo Next: Enable GitHub Pages for live website
echo.
pause



