import React, { ReactElement, useState, useEffect, useRef } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );


export default function DashlabsProject(): ReactElement {
    const [open, setOpen] = useState(false);
    const daslabsImageRef = useRef(null)

    const handleDialog = () => {
      setOpen(!open);
    };

    useEffect(()=>{
        gsap.from(daslabsImageRef.current,{
            scrollTrigger: {
                trigger: daslabsImageRef.current,
                toggleActions: "restart pause reverse pause",
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x:100,
            opacity: 0,
        })
    },[])

    return (
        <>
            <div className="project-container">
                <div className="project-image-container-odd" ref={daslabsImageRef}>
                    <img src={'/assets/projects/dashlabs.jpg'}/>
                </div>
                <div className="project-description-container-odd">
                    <div className="project-descriptions">
                        <p className="project-description-sub">Healthcare, COVID-19, Laboratory Tests</p>
                        <p className="project-description-title">Dashlabs.ai | Simplifying <br/>Healthcare</p>
                        <p className="project-description-link" onClick={()=>handleDialog()}>VIEW PROJECT</p>
                    </div>

                    <div className="project-techstack">{techStacks(PROJECT_TYPE.DASHLABS)}</div>
                </div>
            </div>
            <ProjectDialog open={open} handleDialog={handleDialog} projectType={PROJECT_TYPE.DASHLABS}/>  
        </>
    )
}