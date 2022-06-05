import React, { ReactElement, useRef, useEffect } from 'react'

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector } from '@material-ui/lab';
import { TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';
import { ListItemText } from '@material-ui/core';

import ImageContainer from '../_commons/ImageContainer';
import { InformationPersonArgs, TechStackArgs } from './values'
import { informationPerson, informationTechStack} from './values'

import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );



export default function Information(): ReactElement {
	const aboutTextRef = useRef(null);

	useEffect(()=>{
			gsap.from(aboutTextRef.current,{
					scrollTrigger: {
							trigger: aboutTextRef.current,
							toggleActions: "restart pause reverse pause",
							start: "top center",
							end: "center center",
							scrub: 1
					},
					y:-100,
					opacity: 0,
			})
	},[])
	return (
		<>
      <p className="project-text" ref={aboutTextRef}>
				<span>About Me</span>
			</p>
			<div className="containerDesktop">
				<Timeline>
					{
						informationPerson.map((person : InformationPersonArgs, index:number) : ReactElement =>{
							return(
								<TimelineItem key={index}>
									<TimelineOppositeContent>
										<ListItemText
											primary={<span className="primaryDesktop">{ person?.value }</span>}
											secondary={<span className="secondary">{ person?.title }</span>}
											>
										</ListItemText>
									</TimelineOppositeContent>

									<TimelineSeparator>
											<TimelineDot color={"primary"}>
													{person?.icon}
											</TimelineDot>
											{index+1 !== informationPerson.length && <TimelineConnector className="timelineConnector"/>}
									</TimelineSeparator>

									<TimelineContent>
										<div className="imageContainer">
												{
													informationTechStack[index]?.value?.map((techStack : TechStackArgs, indexNum : number) : ReactElement =>{
														return(
															<React.Fragment key={indexNum}>
																<ImageContainer imageSrc={techStack.icon} caption={techStack.title}/>
															</React.Fragment>
														)
													})
												}
										</div>
									</TimelineContent> 
								</TimelineItem>
							)
						})
					}
				</Timeline>
		</div>
		</>
	)
}
