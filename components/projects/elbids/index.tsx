import React, { ReactElement, useState } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'

export default function ElbidsProject(): ReactElement {
    const [open, setOpen] = useState(false);

    const handleDialog = () => {
      setOpen(!open);
    };
    
    return (
        <>
            <div className="project-container">
                <div className="project-image-container-odd">
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