import React, { ReactElement, useState } from 'react'
import ProjectDialog, { techStacks } from '../../_commons/projectDialog';
import { PROJECT_TYPE } from '../../_commons/projectValues'

export default function UpWorkProjects(): ReactElement {
    const [open, setOpen] = useState(false);

    const handleDialog = () => {
      setOpen(!open);
    };
    return (
        <>
            <div className="project-container">
                <div className="project-image-container-even">
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