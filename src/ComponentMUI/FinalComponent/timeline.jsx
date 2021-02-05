import React from 'react';
import { Fragment } from 'react';
import { UseStyleFinal } from './style';
import {Grid, Typography} from '@material-ui/core'; 
import {Timeline, TimelineSeparator, TimelineContent, TimelineDot, TimelineItem, TimelineConnector, TimelineOppositeContent} from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import RepeatIcon from '@material-ui/icons/Repeat';

function TimeLineComponent(){
   const styleFinal = UseStyleFinal();

   return(
      <Fragment>
         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Timeline</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12} justify='center'>
                  <Timeline>
                     <TimelineItem>
                        <TimelineSeparator>
                           <TimelineDot/>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                        <TimelineSeparator>
                           <TimelineDot/>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                        <TimelineSeparator>
                           <TimelineDot/>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                        <TimelineSeparator>
                           <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>Repeat</TimelineContent>
                     </TimelineItem>
                  </Timeline>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2</Typography>
               </Grid>
               <Grid item xs={12} justify='center'>
                  <Timeline>
                     <TimelineItem>
                        <TimelineOppositeContent>
                           <Typography color='textSecondary'>11:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot/>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                     <TimelineOppositeContent>
                           <Typography color='textSecondary'>12:10 - 17:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot/>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                     <TimelineOppositeContent>
                           <Typography color='textSecondary'>23:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot/>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                     <TimelineOppositeContent>
                           <Typography color='textSecondary'>10:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>Repeat</TimelineContent>
                     </TimelineItem>
                  </Timeline>
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3</Typography>
               </Grid>
               <Grid item xs={12} justify='center'>
                  <Timeline align='alternate'>
                     <TimelineItem>
                        <TimelineOppositeContent>
                           <Typography color='textSecondary'>11:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot color='secondary'>
                              <FastfoodIcon/>
                           </TimelineDot>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                     <TimelineOppositeContent>
                           <Typography color='textSecondary'>12:10 - 17:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot color='primary'>
                              <LaptopMacIcon />
                           </TimelineDot>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                     <TimelineOppositeContent>
                           <Typography color='textSecondary'>23:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot color='secondary' variant='outlined'>
                              <LocalHotelIcon/>
                           </TimelineDot>
                           <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                     </TimelineItem>
                     <TimelineItem>
                     <TimelineOppositeContent>
                           <Typography color='textSecondary'>10:00</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot style={{background:'blue'}}>
                              <RepeatIcon/>
                           </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>Repeat</TimelineContent>
                     </TimelineItem>
                  </Timeline>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
         
   )
}

export default TimeLineComponent;