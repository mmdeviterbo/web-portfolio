import React, { ReactElement, useEffect, useRef } from 'react'
import ElbidsProject from './elbids'
import AnalyticaProject from './analytica'
import UpQuizProject from './upquiz'
import DashlabsProject from './dashlabs'
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );


export default function Projects(): ReactElement {
    const projectTextRef = useRef(null);

    useEffect(()=>{
        gsap.from(projectTextRef.current,{
            scrollTrigger: {
                trigger: projectTextRef.current,
                toggleActions: "restart pause reverse pause",
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            y:-100,
            opacity: 0,
        })
    },[])
    
    return (
        <>
            <p className="project-text" id="project-text-id" ref={projectTextRef}>Projects</p>
            <ElbidsProject/>
            <AnalyticaProject/>
            <DashlabsProject/>
            <UpQuizProject/>
        </>
    )
}
