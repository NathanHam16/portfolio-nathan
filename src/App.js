import React, { useState, useEffect } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import ReactCursor from './components/Cursor';
import IconHex from './components/Hex';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const personalDetails = {
    name: 'Nathan Wang',
    location: 'Brisbane, Australia',
    email: 'nathan123wang@gmail.com',
    availability: 'Open for work',
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      <ReactCursor />
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-icon">
            <IconHex />
          </div>
        </div>
      ) : (
        <AnimatedRoutes personalDetails={personalDetails} />
      )}
    </>
  );
}

export default App;
