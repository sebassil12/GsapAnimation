import './App.css'
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main className="App">
      <Navbar />

    </main>
  )
}

export default App
