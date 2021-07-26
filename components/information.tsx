import React, { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector } from '@material-ui/lab';
import { TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';
import { Paper, Typography,Container } from '@material-ui/core';
import { LaptopMac, Code, Storage, ColorLens } from '@material-ui/icons';


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
  }
}));

export default function Information(): ReactElement {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <LaptopMac fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector}/>
                    </TimelineSeparator>

                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1"> ReactJs </Typography>
                            <Typography variant="h6" component="h1"> NextJs </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <Code fontSize={'large'}/>
                        </TimelineDot>
                        <TimelineConnector className={classes.timelineConnector}/>
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1"> NodeJs </Typography>
                            <Typography variant="h6" component="h1"> Typescript </Typography>
                            <Typography variant="h6" component="h1"> Apollo-Graphql </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
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
                    <TimelineSeparator>
                        <TimelineDot color={"primary"}>
                            <ColorLens fontSize={'large'}/>
                        </TimelineDot>
                    </TimelineSeparator>
                    
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1"> CSS </Typography>
                            <Typography variant="h6" component="h1"> SASS </Typography>
                            <Typography variant="h6" component="h1"> Tailwind </Typography>
                            <Typography variant="h6" component="h1"> Bootstrap </Typography>
                            <Typography variant="h6" component="h1"> Gsap </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
    </Container>
    )
}
