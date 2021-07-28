import React, { ReactElement } from 'react'

import { InformationPersonArgs, TechStackArgs, InformationTechStackArgs } from './values'
import { informationPerson, informationTechStack} from './values'

import ImageContainer from '../_commons/ImageContainer';

export default function InformationTabletMobile() : ReactElement {
  return (
    <>
      <p className="titleInformationTabletMobile">
        About Me
      </p>
      <div className="containerTabletMobile">
        {informationPerson?.map((person : InformationPersonArgs, index:number) : ReactElement =>{
          return(
            <div className="rowPerson" key={index}> 
              {person?.icon}
              <div>
                <p> {person.value} </p>
                <p> {person.title} </p>
              </div>
            </div>
          )
        })}
      </div>
      
      <p className="titleInformationTabletMobile">
        Tech Stack
      </p>
      <div className="containerTabletMobile">
        {informationTechStack?.map((techStacks : InformationTechStackArgs, index:number) : ReactElement =>{
          return(
              <div className="rowTech" key={index}>
                <p>{techStacks.title}</p>
                <div className="rowTechStack"> 
                  {techStacks?.value?.map((techStack : TechStackArgs, index : number) : ReactElement =>{
                    return(
                      <React.Fragment key={index}>
                        <ImageContainer imageSrc={techStack?.icon} caption={techStack?.title}/>
                      </React.Fragment>
                    )
                  })}
                </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
