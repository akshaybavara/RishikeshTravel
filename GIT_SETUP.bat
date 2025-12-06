@echo off
echo ========================================
echo  RISHIKESH GATEWAY - GIT SETUP SCRIPT
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Configuring Git user...
git config --global user.name "Akshay Bavara"
git config --global user.email "akshaybavara@example.com"

echo.
echo Step 3: Adding all files to Git...
git add .

echo.
echo Step 4: Checking Git status...
git status

echo.
echo Step 5: Creating initial commit...
git commit -m "Initial commit: Rishikesh Gateway Travel Website

✅ Complete Angular 17 frontend application
✅ Features: Tours, Gallery, Contact, Booking system
✅ UI: Material Design + Tailwind CSS + Himalayan theme
✅ Responsive design for all devices
✅ Video backgrounds and image galleries
✅ Currency & language selectors
✅ Social media integration
✅ SEO optimized structure"

echo.
echo Step 6: Connecting to GitHub repository...
git remote add origin https://github.com/akshaybavara/RishikeshGateway.git

echo.
echo Step 7: Pushing to GitHub...
git push -u origin master

echo.
echo ========================================
echo         🎉 SUCCESS! 🎉
echo ========================================
echo.
echo Your Rishikesh Gateway project has been published to:
echo https://github.com/akshaybavara/RishikeshGateway.git
echo.
echo Next steps:
echo 1. Visit your GitHub repository
echo 2. Go to Settings → Pages
echo 3. Deploy using GitHub Pages for live website
echo.
pause



