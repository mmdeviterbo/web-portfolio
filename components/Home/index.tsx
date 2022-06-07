import React, { ReactElement, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );

export default function HomeTitle(): ReactElement {
    const TITLE_1: string[] = ["D", "e", "s", "i", "g", "n", "-", "D", "a", "t", "a"];
    const TITLE_2: string[] = ["d","e", "v", "e", "l", "o", "p", "m", "e", "n", "t", "\xa0", "o", "f"];
    const TITLE_3: string[] = ["w", "e", "b", "\xa0", "p", "r", "o", "d", "u", "c", "t", "s"];

    useEffect(()=>{
        for(let i=0;i<TITLE_1.length;i++){
            if(window.innerWidth>=770){
                if(!(i>=2 && i<=5)){
                    gsap.to(`.animate-text-1-${i}`,{
                        scrollTrigger: {
                            trigger: `.web-products`,
                            toggleActions: "restart pause reverse pause",
                            start: "0% 45%",
                            end: "12% 38%",
                            scrub: true,
                        },
                        y:-20,
                        rotateY: -90,
                        opacity: 0,
                        scale: 0.3
                    })
                }
            }

            const TITLE_1_ELEM = document.querySelector(`.animate-text-1-${i}`)
            const hover_1 = gsap.to(TITLE_1_ELEM, {
                scale: 1.3,
                duration: 0.1,
                paused: true,
              });
            TITLE_1_ELEM.addEventListener("mouseenter", () => hover_1.play());
            TITLE_1_ELEM.addEventListener("mouseleave", () => hover_1.reverse());

            gsap.from(`.animate-text-1-${i}`,{
                y: -500,
                duration: 0.8,
                ease: "power4.out",
                delay: i*0.10
            })
        }

        for(let i=0;i<TITLE_2.length;i++){
            if(window.innerWidth>=770){
                if(i!==7 && i!==8){
                    gsap.to(`.dev-of-${i}`,{
                        scrollTrigger: {
                            trigger: `.web-products`,
                            toggleActions: "restart pause reverse pause",
                            start: "0% 45%",
                            end: "12% 38%",
                            scrub: true,
                        },
                        rotateY: -90,
                        y:-20,
                        opacity: 0,
                        scale: 0.3
                    })
                }
            }   
        }


        gsap.from(`.dev-of`,{
            y: -500,
            duration: 0.8,
            ease: "power4.out",
            delay: 0.10
        })

        for(let i=0;i<TITLE_3.length;i++){
            if(window.innerWidth>=770){
                gsap.to(`.web-products`,{
                    scrollTrigger: {
                        trigger: `.web-products`,
                        toggleActions: "restart pause reverse pause",
                        start: "0% 45%",
                        end: "12% 38%",
                        scrub: true,
                    },
                    y:-10,
                    opacity: 0,
                    scale: 0.2
                })
            }
        }

        gsap.from(`.web-products`,{
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            delay: 2
        })
    },[])   
    
    return (
        <>
            <div className="gradient-circle"></div>
            <div className="home-title-container">
                <p id="home-title-text" draggable={false}>
                    {TITLE_1.map((letter: string, index: number)=><span key={index} className={`animate-text animate-text-1-${index}`}>{letter}</span>)}
                    <br/>
                    {TITLE_2.map((letter: string, index: number)=><span key={index} id="dev-of" className={`dev-of dev-of-${index}`}>{letter}</span>)}
                    <br/>
                    {TITLE_3.map((letter: string, index: number)=><span key={index} className={`web-products`}>{letter}</span>)}
                </p>
            </div>
        </>
    )
}

