import React, { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector } from '@material-ui/lab';
import { TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';
import { Paper, Typography,Container } from '@material-ui/core';
import { LaptopMac, Code, Storage, ColorLens } from '@material-ui/icons';

import GraphqlIcon from './../SvgIcons/icons/graphqlIcon';
import NextJSIcon from './../SvgIcons/icons/nextjsIcon';
import NodeJSIcon from './../SvgIcons/icons/nodejsIcon';
import ReactJSIcon from './../SvgIcons/icons/reactjsIcon';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  timelineConnector:{
    minHeight:'10vh',  
    maxHeight:'calc(10vh + 15px)'
  },
  container:{
      display:'flex',
      flexDirection : 'column',
      justifyContent: 'center',
      border:'4px solid yellow',
      height:'100vh',
  },
  information : {
      color: 'white'
  }
}));

export default function Information(): ReactElement {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Timeline>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.information} variant={'h6'}>Marty de Viterbo</Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <LaptopMac fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>

                            <Typography variant="h6" component="h1"> ReactJS </Typography>
                            <Typography variant="h6" component="h1"> NextJS </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.information} variant={'h6'}> 
                            A<strong> Magna Cum Laude </strong> 
                            graduate <br/> 
                            of BS Computer Science  
                        </Typography>
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <Code fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector}/>
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1"> NodeJS </Typography>
                            <Typography variant="h6" component="h1"> Typescript </Typography>
                            <Typography variant="h6" component="h1"> Apollo-Graphql </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent>
                            <Typography className={classes.information} variant={'h6'}>University of Philippines Los Baños</Typography>
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <Storage fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector} />
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1"> MongoDB </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                
                <TimelineItem>
                    <TimelineOppositeContent>
                            <Typography className={classes.information} variant={'h6'}>Muntinlupa City | Trece Martirez City </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <ColorLens fontSize={'large'}/>
                        </TimelineDot>
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Paper elevation={10} className={classes.paper}>
                            <Typography variant="subtitle1" component="h1"> CSS </Typography>
                            <Typography variant="subtitle1" component="h1"> SASS </Typography>
                            <Typography variant="subtitle1" component="h1"> Tailwind </Typography>
                            <Typography variant="subtitle1" component="h1"> Bootstrap </Typography>
                            <Typography variant="subtitle1" component="h1"> Gsap </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
    </Container>
    )
}
