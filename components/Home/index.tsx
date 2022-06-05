import React, { ReactElement, useEffect } from 'react'
import gsap from 'gsap'

export default function HomeTitle(): ReactElement {
    const VOWELS: string[] = ["a", "e", "i", "o", "u"];
    const TITLE_1: string = "Design-Data";
    const TITLE_2: string = "development of";
    const TITLE_3: string = "Web Products";

    useEffect(()=>{

        for(let i=0;i<TITLE_1.length;i++){
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

        gsap.from(`.dev-of`,{
            y: -500,
            duration: 0.8,
            ease: "power4.out",
            delay: 0.10
        })
    },[])   
    
    return (
        <>
            <div className="gradient-circle"></div>
            <div className="home-title-container">
                <p id="home-title-text" draggable={false}>
                    {TITLE_1.split('').map((letter: string, index: number)=><span key={index} className={`animate-text animate-text-1-${index}`}>{letter}</span>)}
                    <br/>
                    {TITLE_2.split(/\.  /).map((letter: string, index: number)=><span key={index} id="dev-of" className={`dev-of dev-of-${index}`}>{letter}</span>)}
                    <br/>
                    {TITLE_3.split(/\./).map((letter: string, index: number)=><span key={index} className="animate-text animate-text">{letter}</span>)}
                </p>
            </div>
        </>
    )
}

