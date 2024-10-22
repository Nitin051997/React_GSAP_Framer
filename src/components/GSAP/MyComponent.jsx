import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MyComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { duration: 2, x: 200, opacity: 1 });
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: 100, height: 100, backgroundColor: 'blue', opacity: 0 }}>
        Animate me
      </div>
    </div>
  );
};

export default MyComponent;
