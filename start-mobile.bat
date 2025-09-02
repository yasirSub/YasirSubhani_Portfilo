@echo off
echo Starting React 3D Portfolio for mobile access...
echo.
echo Getting your local IP address...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    set ip=%%a
    goto :found
)
:found
set ip=%ip: =%
echo Your local IP address is: %ip%
echo.
echo Starting development server...
echo You can access your app on your phone at: http://%ip%:5173
echo.
echo Press Ctrl+C to stop the server
echo.
npm run dev:network
