import React, { ReactElement, useState } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'


export default function DashlabsProject(): ReactElement {
    const [open, setOpen] = useState(false);

    const handleDialog = () => {
      setOpen(!open);
    };

    return (
        <>
            <div className="project-container">
                <div className="project-image-container-odd">
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