import React, { ReactElement, useState, useEffect, useRef } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );


export default function ElbidsProject(): ReactElement {
    const elbidsImageRef = useRef(null)
    const [open, setOpen] = useState(false);

    const handleDialog = () => {
      setOpen(!open);
    };
    
    useEffect(()=>{
        gsap.from(elbidsImageRef.current,{
            scrollTrigger: {
                trigger: elbidsImageRef.current,
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
                <div className="project-image-container-odd" ref={elbidsImageRef}>
                    <img src={'/assets/projects/elbids.jpg'}/>
                </div>
                <div className="project-description-container-odd">
                    <div className="project-descriptions">
                        <p className="project-description-sub">E-Commerce, Buy and Sell, Social Interaction</p>
                        <p className="project-description-title">ElBids: Online Auction<br/>System for UPLB Stakeholders</p>
                        <p className="project-description-link" onClick={()=>handleDialog()}>VIEW PROJECT</p>
                    </div>
                    <div className="project-techstack">{techStacks(PROJECT_TYPE.ELBIDS)}</div>
                </div>
            </div> 
            <ProjectDialog open={open} handleDialog={handleDialog} projectType={PROJECT_TYPE.ELBIDS}/>  
        </>
    )
}