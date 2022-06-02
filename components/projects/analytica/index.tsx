import React, { ReactElement } from 'react'
import ImageContainer from '../../_commons/ImageContainer'
import { informationTechStack as techStack } from '../../Information/values'


export default function AnalyticaProject(): ReactElement {
    return (
        <div className="project-container">
            <div className="project-description-container-even">
                <div className="project-descriptions">
                    <p className="project-description-sub">E-Commerce, Buy and Sell, Social Interaction</p>
                    <p className="project-description-title">ElBids: Online Auction System<br/> for UPLB Stakeholders</p>
                    <p className="project-description-link">VIEW PROJECT</p>
                </div>

                <div className="project-techstack">
                    <ImageContainer imageSrc={techStack[0].value[0].icon} caption={techStack[0].value[0].title}/>
                    <ImageContainer imageSrc={techStack[1].value[0].icon} caption={techStack[1].value[0].title}/>
                    <ImageContainer imageSrc={techStack[2].value[0].icon} caption={techStack[2].value[0].title}/>
                </div>
            </div>
            <div className="project-image-container-even">
                <img src={'/assets/projects/analytica.jpg'}/>
            </div>
        </div>   
    )
}