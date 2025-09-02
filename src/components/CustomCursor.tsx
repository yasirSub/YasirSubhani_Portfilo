import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorClass, setCursorClass] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    let lastTime = 0;

    const updateCursor = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Update cursor position
      setPosition({ x: e.clientX, y: e.clientY });

      // Create trail effect less frequently for better performance
      if (!prefersReducedMotion && currentTime - lastTime > 50) { // ~20fps instead of 60fps
        createTrailEffect(e.clientX, e.clientY);
        lastTime = currentTime;
      }
    };

    const createTrailEffect = (x: number, y: number) => {
      const trailElement = document.createElement('div');
      trailElement.className = 'cursor-trail';
      trailElement.style.left = `${x}px`;
      trailElement.style.top = `${y}px`;
      
      document.body.appendChild(trailElement);
      
      // Remove trail element after animation
      setTimeout(() => {
        if (trailElement.parentNode) {
          trailElement.parentNode.removeChild(trailElement);
        }
      }, 400); // Reduced from 600ms
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for different element types
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('cursor-pointer')) {
        setCursorClass('clickable');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        setCursorClass('text');
      } else if (target.classList.contains('hover-lift') || target.classList.contains('hover-scale')) {
        setCursorClass('hover');
      } else {
        setCursorClass('');
      }
    };

    const handleMouseOut = () => {
      setCursorClass('');
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleClick = () => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${cursorClass} ${isClicking ? 'clicking' : ''} ${isPulsing ? 'pulse' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
