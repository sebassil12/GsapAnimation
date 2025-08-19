import './App.css'
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl text-indigo-300'>Hello, GSAP!</h1>
    </div>
  )
}

export default App
