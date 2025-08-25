@echo off
echo Building and deploying to GitHub Pages...
echo.

echo Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo Adding all changes to git...
git add .

echo.
echo Committing changes...
git commit -m "Update portfolio website"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo Deployment complete! Your website will be updated in a few minutes.
echo Visit: https://yasirsub.github.io/YasirSubhani_Portfilo/
echo.
pause
