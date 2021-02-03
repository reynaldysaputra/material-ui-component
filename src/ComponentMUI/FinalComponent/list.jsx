import React, {Fragment} from 'react';
import {Grid, ButtonBase ,Typography, Paper, Avatar, List, ListItem, ListItemText, ListItemIcon, Divider, ListItemSecondaryAction ,ListSubheader, Collapse, ListItemAvatar, IconButton} from '@material-ui/core';
import {UseStyleFinal} from './style';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function ListComponent() {
   const styleFinal = UseStyleFinal();
   const [open, setOpen] = React.useState(false);

   return(
      <>
         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>List</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={3}>
                  <Paper elevation={2}>
                     <List component='nav'>
                        <ListItem button>
                           <ListItemIcon>
                              <InboxIcon/>
                           </ListItemIcon>
                           <ListItemText>Inbox</ListItemText>
                        </ListItem>
                        <ListItem button>
                           <ListItemIcon>
                              <DraftsIcon/>
                           </ListItemIcon>
                           <ListItemText>Drafts</ListItemText>
                        </ListItem>
                     </List>
                     <Divider/>
                     <List component='nav'>
                        <ListItem button>
                           <ListItemText>Inbox</ListItemText>
                        </ListItem>
                        <ListItem button>
                           <ListItemText>Drafts</ListItemText>
                        </ListItem>
                     </List>
                  </Paper>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2</Typography>
               </Grid>
               <Grid item xs={3}>
                  <Paper elevation={2}>
                     <List
                        subheader={
                           <ListSubheader component='div'> 
                              List Sub Header / Title List         
                           </ListSubheader>
                        }
                     >
                        <ListItem button>
                           <ListItemIcon>
                              <SendIcon/>
                           </ListItemIcon>
                           <ListItemText>Sent</ListItemText>
                        </ListItem>
                        <ListItem button>
                           <ListItemIcon>
                              <DraftsIcon/>
                           </ListItemIcon>
                           <ListItemText>Drafts</ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => setOpen(!open)}>
                           <ListItemIcon>
                              <InboxIcon/>
                           </ListItemIcon>
                           <ListItemText>Inbox</ListItemText>

                           {/* icons right side */}
                           {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                           <ListItem button style={{paddingLeft : 30}}>
                              <ListItemIcon>
                                 <StarBorderIcon/>
                              </ListItemIcon>
                              <ListItemText secondary='xxz'>Starred ddda</ListItemText>
                           </ListItem>
                        </Collapse>
                     </List>
                  </Paper>
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3</Typography>
               </Grid>
               <Grid item xs={12} sm={7} md={4}>
                  <Paper elevation={2}>
                     <List component='nav'>
                        <ListItem alignItems='flex-start'>
                           <ListItemAvatar>
                              <Avatar src='https://149346410.v2.pressablecdn.com/wp-content/uploads/2014/07/Joe-Brennan-Founder2.jpg'/>
                           </ListItemAvatar>
                           <ListItemText
                              primary={
                                 <Typography variant='body1'>
                                    Brunch this weekend?
                                 </Typography>
                              }
                              secondary={
                                 <Fragment>
                                    <Typography style={{color:'black', display:'inline', fontSize:'12px'}}>Ali Connors — </Typography>
                                    I'll be in your neighborhood doing errands this…
                                 </Fragment>
                              }
                           />
                        </ListItem>
                        <Divider variant='inset' />
                        <ListItem alignItems='flex-start'>
                           <ListItemAvatar>
                              <Avatar src='https://post.healthline.com/wp-content/uploads/2019/08/woman-portrait-smile-dimples-1296x728-body2-affiliative-1296x728.jpg'/>
                           </ListItemAvatar>
                           <ListItemText
                              primary={
                                 <Typography variant='body1'>
                                    Summer BBQ
                                 </Typography>
                              }
                              secondary={
                                 <Fragment>
                                    <Typography style={{color:'black', display:'inline', fontSize:'12px'}}>to Scott, Alex, Jennifer — </Typography>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem velit ipsum eius molestiae repellendus aspernatur.
                                 </Fragment>
                              }
                           />
                        </ListItem>
                        <Divider variant='inset' />
                        <ButtonBase focusVisibleClassName={styleFinal.focusVisible}>
                           <ListItem alignItems='flex-start'>
                              <ListItemAvatar className='ava'>
                                 <Avatar src='https://www.compactcath.com/wp-content/uploads/2019/03/Old-person-smiling-1024x512-e1551712301307.jpg'/>
                              </ListItemAvatar>
                              <ListItemText
                                 primary={
                                    <Typography variant='body1'>
                                       Oui Oui
                                    </Typography>
                                 }
                                 secondary={
                                    <Fragment>
                                       <Typography style={{color:'black', display:'inline', fontSize:'12px'}}>Kenny Bent.C — </Typography>
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. At, repudiandae.
                                    </Fragment>
                                 }
                              />
                              <ListItemSecondaryAction style={{top : 30}}>
                                 <IconButton edge='end'>
                                    <StarBorderIcon/>
                                 </IconButton>
                              </ListItemSecondaryAction>
                           </ListItem>
                        </ButtonBase>
                     </List>                        
                  </Paper>
               </Grid>
            </Grid>
         </Grid>
      </>
   )
}

export default ListComponent;