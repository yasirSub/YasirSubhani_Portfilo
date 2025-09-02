# 📱 Mobile Access Guide

## How to Access Your 3D Portfolio on Your Phone

### Method 1: Using the Batch File (Recommended)

1. **Double-click** the `start-mobile.bat` file in your project folder
2. The script will automatically:
   - Show your local IP address
   - Start the development server
   - Display the URL to access on your phone

### Method 2: Manual Setup

1. **Start the development server:**
   ```bash
   npm run dev:network
   ```

2. **Find your PC's IP address:**
   - Open Command Prompt
   - Type: `ipconfig`
   - Look for "IPv4 Address" (usually starts with 192.168.x.x or 10.0.x.x)

3. **Access on your phone:**
   - Make sure your phone is connected to the same WiFi network as your PC
   - Open your phone's browser
   - Go to: `http://YOUR_PC_IP:5173`
   - Example: `http://192.168.1.100:5173`

### Troubleshooting

**If you can't access the app:**
1. **Check Windows Firewall:**
   - Windows might block the connection
   - Allow Node.js/Vite through the firewall when prompted

2. **Check Network Connection:**
   - Ensure both devices are on the same WiFi network
   - Try disabling mobile data on your phone

3. **Alternative Port:**
   - If port 5173 doesn't work, try the next available port shown in the terminal

### Mobile Features

✅ **Responsive Design** - Optimized for mobile screens  
✅ **Touch Interactions** - Works with touch gestures  
✅ **Performance Optimized** - 3D content adapted for mobile  
✅ **Fast Loading** - Built with Vite for quick loading  

### Notes

- The 3D computer model is hidden on mobile devices for better performance
- All other sections work perfectly on mobile
- The app will automatically detect mobile devices and optimize accordingly

---

**Enjoy viewing your 3D portfolio on your phone! 📱✨**
