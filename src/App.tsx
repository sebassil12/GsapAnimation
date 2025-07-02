import './App.css'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function App() {

const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {duration: 2, x: 100, rotation: 360});
  }, []);

  return <div ref={boxRef} className="box">Animated Box</div>;
}

export default App
