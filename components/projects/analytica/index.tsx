import React, { ReactElement, useState } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'

export default function AnalyticaProject(): ReactElement {
    const [open, setOpen] = useState(false);

    const handleDialog = () => {
      setOpen(!open);
    };
    return (
        <>
            <div className="project-container">
                <div className="project-image-container-even">
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