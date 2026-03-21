import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants/index.js'


const NavBar = () => {

useGSAP(() => {
    const navTween = gsap.timeline({
        scrollTrigger:{
            trigger:'nav',
            start:'bottom top'
        }
       
    });
gsap.from('nav ul li',{
  y:-50,
  opacity:0,
  duration:1,
  ease:'power3.out',
  stagger:0.1,
  delay:0.3
});

gsap.from('nav img,nav p',{
  y:-50,
  opacity:0,
  duration:1,
  ease:'power3.out',
  stagger:0.1,
  delay:0.3
});

  navTween.fromTo('nav', { backgroundColor:'transparent'}, {

    backgroundColor: '#00000050' , 
    backgroundFilter: 'blur(10px)',
    duration : 1,
    ease: 'power1.inOut'
  });
})

  return (
    <nav>
      <div>
        <a href="home" className="flex items-center" gap-2>
            <img src="/images/logo.png"></img>
            <p>FORYOU</p>

        </a>

        <ul>
            {navLinks.map((link)=>(
                <li key = {link.id}>
                <a href = {`#${link.id}`}>{link.title}</a>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
