import React, { ReactElement } from 'react'
import { tabletMobileStyle as useStyles }  from './style';

import { InformationPersonArgs, TechStackArgs, InformationTechStackArgs } from './values'
import { informationPerson, informationTechStack} from './values'

import ImageContainer from '../_commons/ImageContainer';

export default function InformationTabletMobile() : ReactElement {
  const classes  = useStyles({})

  return (
    <>
      <div className={classes.container}>
        {informationPerson?.map((person : InformationPersonArgs, index:number) : ReactElement =>{
          return(
            <div className={classes.rowPerson} key={index}> 
              {person?.icon}
              <div>
                <p> {person.value} </p>
                <p> {person.title} </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className={classes.container}>
        {informationTechStack?.map((techStacks : InformationTechStackArgs, index:number) : ReactElement =>{
          return(
              <div className={classes.rowTech}>
                <p className={classes.primary}>{techStacks.title}</p>
                <div className={classes.rowTechStack}> 
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
