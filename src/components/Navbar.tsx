import { useGSAP } from '@gsap/react';
import { navLinks, type NavLink } from '../../constants/index';
import gsap from 'gsap';
export default function Navbar() {

    useGSAP(() => {
        // GSAP animations can be added here
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        });

        navTween.fromTo('nav', {
            backgroundColor:'transparent',
        },{
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        })
    });
  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
                <p>Velvet Pour</p>
            </a>

            <ul>
               {
                 navLinks.map((link:NavLink) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))
               }
            </ul>
        </div>
    </nav>
  )
}
