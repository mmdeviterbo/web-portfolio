import React, { ReactElement } from 'react'

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector } from '@material-ui/lab';
import { TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';
import { ListItemText } from '@material-ui/core';

import ImageContainer from '../_commons/ImageContainer';
import { InformationPersonArgs, TechStackArgs } from './values'
import { informationPerson, informationTechStack} from './values'

export default function Information(): ReactElement {
	return (
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
	)
}
