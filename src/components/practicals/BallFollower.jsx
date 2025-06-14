import React, { useState, useEffect } from 'react';

const BallFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ballStyle = {
    position: 'absolute',
    top: position.y , // Centering the ball
    left: position.x,
    width: '200px',
    height: '200px',
    borderRadius: '220%',
    backgroundColor: 'red',
    pointerEvents: 'none', // So it doesn’t interfere with mouse events
   
  };

  return <div style={ballStyle}></div>;
};

export default BallFollower;
