import codeLogo from "../assets/images/codeLogo.jpg"
import heroimg from "../assets/images/heroimg.jpg"
import { useRef } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const container = useRef(null);

    useGSAP(() => {
            // gsap code here...
            const timeline = gsap.timeline({
                defaults:{
                    opacity: 0,
                    duration: 1,
                    ease: "linear",
                    // stagger: 0.2,
                    // delay: 0.5,
                    // ease: "power2.inOut",
                }
            })
            .fromTo(".hero-text1", {y:150}, {y:0, opacity: 1})
            .fromTo(".hero-text2", {y:50}, {y:0, opacity: 1})
            .fromTo(".heroimg", {opacity:0}, {opacity:1, duration: 2})
            // .fromTo('.anime', {opacity:0}, {opacity:1})
            
            .fromTo('.anime', {y:50}, { y:0, duration: 7, repeat: -1, yoyo: true, opacity:1,}, "-=3")
            .fromTo('.anime2', {y:70}, { y:0, duration: 7, repeat: -1, yoyo: true, opacity:1,}, "-=5"); // <-- automatically reverted
        },
    );

    
  return (
    <div>
      <div className="h-screen w-f flex justify-center items-center flex-col space-y-10 p-5" id="Hero">
        <div className="flex justify-center items-center flex-col space-y-2">
            <h2 className="text-5xl md:text-7xl font-bold text-white text-center font-quicksand hero-text1">JS <span className="text-sky-400  shadow-sky-200">Frameworks</span></h2>
            <h2 className="text-3xl font-semibold text-slate-400 hero-text2">Pros and Cons</h2>
        </div>
        <div className="w-[80%] md:w-[650px] h-80 relative">
            <img src={heroimg} className="w-full h-full object-cover object-center border-[2.5px] border-sky-800 rounded-md heroimg"  alt="" />
            <div className="absolute text-xl text-white flex items-center space-x-2 border-2 border-slate-800 px-6 py-2 rounded-[11px] backdrop-blur-[6px] top-10 right-[-30px] anime">
                <i className="fa-brands fa-react text-sky-400 text-2xl"></i>
                <span>React</span>
            </div>
            <div className="absolute text-xl text-white flex items-center space-x-2 border-2 border-slate-800 px-6 py-2 rounded-[11px] backdrop-blur-[6px] top-40 left-[-40px] anime2">
                <i class="fa-brands fa-angular text-sky-400 text-2xl"></i>
                <span>Angular</span>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
