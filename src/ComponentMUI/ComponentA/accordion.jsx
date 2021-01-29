import React from 'react';
import { Fragment, useState } from 'react';
import { UseStyleA } from './style';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Badge, Typography } from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { AccordionCostumize, AccordionSummaryCostumize, AccordionDetailsCostumize } from './costumizeComponentA';

function AccordionComponent() {
   const styleA = UseStyleA();
   const [expanded, setExpanded] = useState(false);
   const handleChange = (panel) => (event, isExpanded) => {
      console.log(event);
      setExpanded(isExpanded ? panel : false);
   };

   return(
      <Fragment>
         {/* ---------- Acordion ---------- */}
         <Grid container justify='center' className={styleA.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Accordion</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>    
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <Accordion elevation={2} square={false}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreRoundedIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>Accordion 1</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quae delectus illo! Quia, consequatur qui. Quis iusto provident quibusdam modi tempora accusamus iure quos debitis id, est ratione enim. Rerum ipsa unde soluta ea porro voluptatibus odit tenetur? Neque doloremque adipisci alias esse accusamus autem a quae iusto similique suscipit.</Typography>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion elevation={2} square={false}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreRoundedIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>Accordion 2</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quae delectus illo! Quia, consequatur qui. Quis iusto provident quibusdam modi tempora accusamus iure quos debitis id, est ratione enim. Rerum ipsa unde soluta ea porro voluptatibus odit tenetur? Neque doloremque adipisci alias esse accusamus autem a quae iusto similique suscipit.</Typography>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion elevation={2} square={false} disabled>
                     <AccordionSummary
                        expandIcon={<ExpandMoreRoundedIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>Accordion 2</Typography>      
                        <div className={styleA.badgeMe}>Locked</div>                  
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quae delectus illo! Quia, consequatur qui. Quis iusto provident quibusdam modi tempora accusamus iure quos debitis id, est ratione enim. Rerum ipsa unde soluta ea porro voluptatibus odit tenetur? Neque doloremque adipisci alias esse accusamus autem a quae iusto similique suscipit.</Typography>
                     </AccordionDetails>
                  </Accordion>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2</Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <Accordion elevation={2} square={false} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreRoundedIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>Accordion 1</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quae delectus illo! Quia, consequatur qui. Quis iusto provident quibusdam modi tempora accusamus iure quos debitis id, est ratione enim. Rerum ipsa unde soluta ea porro voluptatibus odit tenetur? Neque doloremque adipisci alias esse accusamus autem a quae iusto similique suscipit.</Typography>
                     </AccordionDetails>
                  </Accordion>
                  <Accordion elevation={2} square={false} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreRoundedIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>Accordion 2</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quae delectus illo! Quia, consequatur qui. Quis iusto provident quibusdam modi tempora accusamus iure quos debitis id, est ratione enim. Rerum ipsa unde soluta ea porro voluptatibus odit tenetur? Neque doloremque adipisci alias esse accusamus autem a quae iusto similique suscipit.</Typography>
                     </AccordionDetails>
                  </Accordion>
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3</Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                  <AccordionCostumize elevation={2} square={false}>
                     <AccordionSummaryCostumize
                        expandIcon={<ExpandMoreRoundedIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                     >
                        <Typography>Accordion 2</Typography>
                     </AccordionSummaryCostumize>
                     <AccordionDetailsCostumize>
                        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quae delectus illo! Quia, consequatur qui. Quis iusto provident quibusdam modi tempora accusamus iure quos debitis id, est ratione enim. Rerum ipsa unde soluta ea porro voluptatibus odit tenetur? Neque doloremque adipisci alias esse accusamus autem a quae iusto similique suscipit.</Typography>
                     </AccordionDetailsCostumize>
                  </AccordionCostumize>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default AccordionComponent;