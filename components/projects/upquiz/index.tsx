import React, { ReactElement, useState, useEffect, useRef } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );


export default function UpWorkProjects(): ReactElement {
    const [open, setOpen] = useState(false);
    const upquizImageRef = useRef(null)

    const handleDialog = () => {
      setOpen(!open);
    };

    useEffect(()=>{
        gsap.from(upquizImageRef.current,{
            scrollTrigger: {
                trigger: upquizImageRef.current,
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
                <div className="project-image-container-even" ref={upquizImageRef}>
                    <img src={'/assets/projects/upquiz.jpg'}/>
                </div>
                <div className="project-description-container-even">
                    <div className="project-descriptions">
                        <p className="project-description-sub">Blended Learning Platform, Online Classroom, Assessment</p>
                        <p className="project-description-title">UpQuiz: Online Lecture &#38;<br/>Assessment Platform</p>
                        <p className="project-description-link" onClick={()=>handleDialog()}>VIEW PROJECT</p>
                    </div>
                    <div className="project-techstack">{techStacks(PROJECT_TYPE.UPQUIZ)}</div>
                </div>
            </div>
            <ProjectDialog open={open} handleDialog={handleDialog} projectType={PROJECT_TYPE.UPQUIZ}/>  
        </>
    )
}