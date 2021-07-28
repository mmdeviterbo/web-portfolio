import React, { ReactElement } from 'react'
import { desktopStyle as useStyles }  from './style';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector } from '@material-ui/lab';
import { TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';
import { ListItemText, Container } from '@material-ui/core';
import { LaptopMac, Code, Storage, ColorLens } from '@material-ui/icons';

import ImageContainer from '../_commons/ImageContainer';

import apollographqlIcon  from './../../public/assets/frameworksIcon/apollographqlIcon.png';
import nextJSIcon  from './../../public/assets/frameworksIcon/nextJSIcon.png';
import nodeJSIcon  from './../../public/assets/frameworksIcon/nodeJSIcon.png';
import reactJSIcon from './../../public/assets/frameworksIcon/reactJSIcon.png';
import mongodbIcon from './../../public/assets/frameworksIcon/mongodbIcon.png';
import typescriptIcon from './../../public/assets/frameworksIcon/typescriptIcon.png';
import bootstrapIcon from './../../public/assets/frameworksIcon/bootstrapIcon.png';
import gsapIcon from './../../public/assets/frameworksIcon/gsapIcon.png';
import cssIcon from './../../public/assets/frameworksIcon/cssIcon.png';
import tailwindIcon from './../../public/assets/frameworksIcon/tailwindIcon.png';
import sassIcon from './../../public/assets/frameworksIcon/sassIcon.png';

export default function Information(): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Timeline>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <ListItemText
                            primary={<span className={classes.primary}>Marty de Viterbo</span>}
                            secondary={<span className={classes.secondary}>Name</span>}
                        >
                        </ListItemText>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <LaptopMac fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Container className={classes.imageContainer}>
                            <ImageContainer imageSrc={reactJSIcon} caption={'ReactJS'}/>
                            <ImageContainer imageSrc={nextJSIcon} caption={'NextJS'}/>
                        </Container>
                    </TimelineContent>  
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <ListItemText
                            primary={
                                <span className={classes.primary}>
                                    A Magna Cum Laude graduate <br/> 
                                    of BS Computer Science  
                                </span>
                            }
                            secondary={<span className={classes.secondary}>Degree</span>}
                        > 
                        </ListItemText>
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <Code fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector}/>
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Container className={classes.imageContainer}>
                            <ImageContainer imageSrc={nodeJSIcon} caption={'NodeJS'}/>
                            <ImageContainer imageSrc={typescriptIcon} caption={'TypeScript'}/>
                            <ImageContainer imageSrc={apollographqlIcon} caption={'GraphQl'}/>
                        </Container>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent>
                            <ListItemText
                                primary={<span className={classes.primary}>University of the Philippines Los Baños</span>}
                                secondary={<span className={classes.secondary}>University</span>}
                            >
                            </ListItemText>
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <Storage fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector} />
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Container className={classes.imageContainer}>
                            <ImageContainer imageSrc={mongodbIcon} caption={'MongoDB'}/>
                        </Container>
                    </TimelineContent>
                </TimelineItem>
                
                <TimelineItem>
                    <TimelineOppositeContent>
                            <ListItemText
                                primary={<span className={classes.primary}>Manila, Philippines</span>}
                                secondary={<span className={classes.secondary}>Location</span>}
                            >
                            </ListItemText>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <ColorLens fontSize={'large'}/>
                        </TimelineDot>
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Container className={classes.imageContainer}>
                            <ImageContainer imageSrc={cssIcon} caption={'CSS'}/>
                            <ImageContainer imageSrc={sassIcon} caption={'Sass'}/>
                            <ImageContainer imageSrc={gsapIcon} caption={'Gsap'}/>
                            <ImageContainer imageSrc={bootstrapIcon} caption={'Bootstrap'}/>
                            <ImageContainer imageSrc={tailwindIcon} caption={'Tailwind'}/>
                        </Container>

                    </TimelineContent>
                </TimelineItem>
            </Timeline>
    </div>
    )
}
