import React, { ReactElement, useState, useEffect, useRef } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );


export default function AnalyticaProject(): ReactElement {
    const [open, setOpen] = useState(false);
    const analyticaImageRef = useRef(null);

    const handleDialog = () => {
      setOpen(!open);
    };

    useEffect(()=>{
        gsap.from(analyticaImageRef.current,{
            scrollTrigger: {
                trigger: analyticaImageRef.current,
                toggleActions: "restart pause reverse pause",
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x:-100,
            opacity: 0,
        })
    },[])

    return (
        <>
            <div className="project-container">
                <div className="project-image-container-even" ref={analyticaImageRef}>
                    <img src={'/assets/projects/analytica.jpg'}/>
                </div>
                
                <div className="project-description-container-even">
                    <div className="project-descriptions">
                        <p className="project-description-sub">Library System, Books, Publication</p>
                        <p className="project-description-title">Analytica: Online Library <br/>System</p>
                        <p className="project-description-link" onClick={()=>handleDialog()}>VIEW PROJECT</p>
                    </div>
                    <div className="project-techstack">{techStacks(PROJECT_TYPE.ANALYTICA)}</div>
                </div>
            </div>   
            <ProjectDialog open={open} handleDialog={handleDialog} projectType={PROJECT_TYPE.ANALYTICA}/>  
        </>
    )
}