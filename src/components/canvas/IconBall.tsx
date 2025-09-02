import React from "react";
import BallCanvas from "./Ball";

interface IconBallProps {
  icon: string;
  name: string;
}

const IconBall: React.FC<IconBallProps> = ({ icon, name }) => {
  // Check if the icon is a PNG file (which works with BallCanvas) or SVG (which doesn't)
  const isPngIcon = typeof icon === 'string' && (icon.includes('.png') || icon.includes('data:image/png'));
  
  if (isPngIcon) {
    // Use the original 3D BallCanvas for PNG icons
    return (
      <div className="h-28 w-28 flex flex-col items-center justify-center">
        <div className="h-20 w-20">
          <BallCanvas icon={icon} />
        </div>
        <span className="text-white text-xs text-center font-medium mt-2">{name}</span>
      </div>
    );
  }
  
  // Use simple image display for SVG icons
  return (
    <div className="h-28 w-28 flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
        <img 
          src={icon} 
          alt={name}
          className="w-12 h-12 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">${name.charAt(0)}</div>`;
            }
          }}
        />
      </div>
      <span className="text-white text-xs text-center font-medium">{name}</span>
    </div>
  );
};

export default IconBall;
