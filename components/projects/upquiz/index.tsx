import React, { ReactElement } from 'react'
import ImageContainer from '../../_commons/ImageContainer'
import { informationTechStack as techStack, otherTechStack } from '../../Information/values'

export default function UpWorkProjects(): ReactElement {
    return (
        <div className="project-container">
            <div className="project-image-container-even">
                <img src={'/assets/projects/upquiz.jpg'}/>
            </div>
            <div className="project-description-container-even">
                <div className="project-descriptions">
                    <p className="project-description-sub">Blended Learning Platform, Online Classroom, Assessment</p>
                    <p className="project-description-title">UpQuiz: Online Lecture &#38;<br/>Assessment Platform</p>
                    <p className="project-description-link">VIEW PROJECT</p>
                </div>

                <div className="project-techstack">
                    <ImageContainer imageSrc={otherTechStack[0].value[1].icon} caption={otherTechStack[0].value[1].title}/>
                    <ImageContainer imageSrc={techStack[0].value[1].icon} caption={techStack[0].value[1].title}/>
                    <ImageContainer imageSrc={otherTechStack[0].value[0].icon} caption={otherTechStack[0].value[0].title}/>
                </div>
            </div>
        </div>   
    )
}