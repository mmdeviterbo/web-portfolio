import React, { ReactElement } from 'react'
import ImageContainer from '../../_commons/ImageContainer'
import { informationTechStack as techStack } from '../../Information/values'

export default function ElbidsProject(): ReactElement {
    
    
    return (
        <div className="project-container">
            <div className="project-description-container-odd">
                <div className="project-descriptions">
                    <p className="project-description-sub">E-Commerce, Buy and Sell, Social Interaction</p>
                    <p className="project-description-title">ElBids: Online Auction System<br/> for UPLB Stakeholders</p>
                    <p className="project-description-link">VIEW PROJECT</p>
                </div>

                <div className="project-techstack">
                    <ImageContainer imageSrc={techStack[0].value[1].icon} caption={techStack[0].value[1].title}/>
                    <ImageContainer imageSrc={techStack[1].value[2].icon} caption={techStack[1].value[2].title}/>
                    <ImageContainer imageSrc={techStack[1].value[0].icon} caption={techStack[1].value[0].title}/>
                    <ImageContainer imageSrc={techStack[2].value[0].icon} caption={techStack[2].value[0].title}/>
                </div>
            </div>
            <div className="project-image-container-odd">
                <img src={'/assets/projects/elbids.jpg'}/>
            </div>
        </div>   
    )
}