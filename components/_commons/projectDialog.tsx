import React, { useState, useEffect, ReactElement } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Container } from '@material-ui/core';
import ImageContainer from '../_commons/ImageContainer'
import { informationTechStack as techStack, otherTechStack } from './../Information/values'
import { PROJECT_TYPE, ProjectArg } from './projectValues'
import PROJECT_VALUES from './projectValues'
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const techStacks=(projectType: PROJECT_TYPE): ReactElement =>{
  if(projectType === PROJECT_TYPE.ELBIDS){
    return(
      <>
        <ImageContainer imageSrc={techStack[0].value[1].icon} caption={techStack[0].value[1].title}/>
        <ImageContainer imageSrc={techStack[1].value[2].icon} caption={techStack[1].value[2].title}/>
        <ImageContainer imageSrc={techStack[1].value[0].icon} caption={techStack[1].value[0].title}/>
        <ImageContainer imageSrc={techStack[2].value[0].icon} caption={techStack[2].value[0].title}/>
        <ImageContainer imageSrc={otherTechStack[0].value[3].icon} caption={otherTechStack[0].value[3].title}/>
      </>
    )  
  }else if(projectType === PROJECT_TYPE.ANALYTICA){
    return(
      <>
        <ImageContainer imageSrc={otherTechStack[0].value[1].icon} caption={otherTechStack[0].value[1].title}/>
        <ImageContainer imageSrc={techStack[0].value[0].icon} caption={techStack[0].value[0].title}/>
        <ImageContainer imageSrc={otherTechStack[0].value[2].icon} caption={otherTechStack[0].value[2].title}/>
        <ImageContainer imageSrc={techStack[1].value[0].icon} caption={techStack[1].value[0].title}/>
        <ImageContainer imageSrc={techStack[2].value[0].icon} caption={techStack[2].value[0].title}/>
      </>
    )
  }else if(projectType === PROJECT_TYPE.DASHLABS){
    return(
      <>
        <ImageContainer imageSrc={techStack[0].value[1].icon} caption={techStack[0].value[1].title}/>
        <ImageContainer imageSrc={techStack[1].value[2].icon} caption={techStack[1].value[2].title}/>
        <ImageContainer imageSrc={techStack[1].value[0].icon} caption={techStack[1].value[0].title}/>
        <ImageContainer imageSrc={techStack[2].value[0].icon} caption={techStack[2].value[0].title}/>
      </>
    )
  }else if(projectType === PROJECT_TYPE.UPQUIZ){
    return(
      <>
        <ImageContainer imageSrc={otherTechStack[0].value[1].icon} caption={otherTechStack[0].value[1].title}/>
        <ImageContainer imageSrc={techStack[0].value[1].icon} caption={techStack[0].value[1].title}/>
        <ImageContainer imageSrc={otherTechStack[0].value[0].icon} caption={otherTechStack[0].value[0].title}/>
      </>
    )
  }
}

const ProjectDialog=({
  open,
  handleDialog,
  projectType
}:{
  open: boolean
  handleDialog: ()=>void
  projectType: PROJECT_TYPE
})=>{
  const [project, setProject] = useState<ProjectArg>(null)

  useEffect(()=>{
    if(projectType === PROJECT_TYPE.ELBIDS) setProject(PROJECT_VALUES[0])
    else if(projectType === PROJECT_TYPE.ANALYTICA) setProject(PROJECT_VALUES[1])
    else if(projectType === PROJECT_TYPE.DASHLABS) setProject(PROJECT_VALUES[2])
    else if(projectType === PROJECT_TYPE.UPQUIZ) setProject(PROJECT_VALUES[3])
  },[])

  const learnings: string[] = project?.learning.split("<br/>")

  return (
    <Dialog 
      fullScreen
      open={open}
      onClose={()=>handleDialog()}
      TransitionComponent={Transition}
      >
        <Container maxWidth={false} className="project-detial-container">
            <IconButton 
              className="exit-button-container" onClick={()=>handleDialog()}
              >
              <ClearIcon />
            </IconButton>
          <Container maxWidth={'md'} className="project-inner-container">
            <p className="project-description-sub">{project?.tags}</p>
            <p className="project-description-title">{project?.title}</p>
            <a className="visit-link" href={project?.link} target="_blank">Visit Link</a>

            <div className="project-inner-techstack">{techStacks(projectType)}</div>

            {learnings?.map((learning: string, index: number)=>{
              return (
                <React.Fragment key={index}>
                  <p className="project-description-learning">{learning}</p>
                  <br/>
                </React.Fragment>
              )
            })}
            {projectType === PROJECT_TYPE.DASHLABS && <>
              <p className="project-description-learning">
                For the more detailed experiences:
                <a href={'https://mmdeviterbo.wixsite.com/internship'} target="_blank">https://mmdeviterbo.wixsite.com/internship</a>
              </p>
            </>}
          </Container>
        </Container>
    </Dialog>
  );
}
export default ProjectDialog