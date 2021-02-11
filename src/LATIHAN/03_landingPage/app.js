import React, {useState, useEffect} from 'react';
import { AppBar, Box, Card, CardMedia, CardContent, Container, Grid, IconButton, ThemeProvider, Toolbar, Typography, Divider, useMediaQuery, Collapse, Grow } from '@material-ui/core';
import { themeLanding } from './theme';
import { useStyleLanding } from './style';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import island1 from './island2.jpg';
import island2 from './island1.jpg';
import ExploreIcon from '@material-ui/icons/Explore';
import {Controller, Scene} from 'react-scrollmagic';
import {Link} from 'react-scroll';

function LandingPage() {
   const style = useStyleLanding();
   const mediaQuery = useMediaQuery(theme => theme.breakpoints.up('md'));
   const [checked, setCheked] = useState(false);
   const [x, setX] = useState(false);

   useEffect(() => setCheked(true), []);
   
   return(
      <ThemeProvider theme={themeLanding}>
         <Box className={style.rootPage}>
            <Box className={style.header}>
               <AppBar>
                  <Toolbar>
                     <Container maxWidth='md' className={style.appBarContainer}>
                        <Typography variant='h5' className={style.appBarTitle}>
                           My<span className={style.colorHeader}>Island</span>.
                        </Typography>

                        <IconButton>
                           <SortIcon className={style.iconMenu}/>
                        </IconButton>
                     </Container>
                  </Toolbar>
               </AppBar>

               <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
                  <Box className={style.contentHeader}>
                     <Typography variant='h2' className={style.titleHeader}>
                        Welcome to <br/>
                        My <span className={style.colorHeader}>Island</span>.
                     </Typography>
                     <Link to='content1' smooth={true}>
                        <IconButton className={style.goDown}>
                           <KeyboardArrowDownIcon color='primary' fontSize='large' />
                        </IconButton>
                     </Link>
                  </Box>
               </Collapse>
            </Box>
            
            <Container maxWidth='md' style={{height:'100vh'}}>
               <Controller>
                  <Scene triggerElement='#content1'>
                     {(progress) => (
                        <Grid container justify='center' alignContent='center' className={style.content1} id='content1' onClick={Boolean(progress) ? setX(true) : null}>
                           {console.log(checked)}
                           <Grid item md={5} xs={12}>
                              <Grow in={x} timeout={1000}>
                                 <Card style={{backgroundColor : 'rgba(0, 0, 0, 0.514)'}}>
                                    <CardMedia
                                       image={island1}
                                       title="Island1"
                                       className={style.cardMediaImg}
                                    />
                                    <CardContent style={{color:'white'}}>
                                       <Typography gutterBottom variant="h5" component="h2">
                                          Lizard
                                       </Typography>
                                       <Typography variant="body2"  component="p">
                                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                          across all continents except Antarctica
                                       </Typography>
                                    </CardContent>
                                 </Card>
                              </Grow>
                           </Grid>
                           <Grid item container alignContent='center' alignItems='center' justify='center' md={2} xs={12} style={{textAlign:'center'}}>
                              <Grid item xs={5} md='auto' className={style.gridContainerDividerContent1}>
                                 <Grow in={x} timeout={1000}>
                                    <Divider variant='middle'  orientation={mediaQuery ? 'vertical' : 'horizontal'} className={style.dividerCard}  />
                                 </Grow>
                              </Grid>
                              <Grid item xs={2} md={12} style={{height:'auto'}}>
                                 <Grow in={x} timeout={1000}>
                                    <IconButton>
                                       <ExploreIcon className={style.ExploreIcon}/>
                                    </IconButton>
                                 </Grow>
                              </Grid>
                              <Grid item xs={5} md='auto' className={style.gridContainerDividerContent1}>
                                 <Grow in={x} timeout={1000}>
                                    <Divider variant='middle' orientation={mediaQuery ? 'vertical' : 'horizontal'} className={style.dividerCard}  />
                                 </Grow>
                              </Grid>
                           </Grid>
                           <Grid item md={5} xs={12}>
                              <Grow in={x} timeout={1000}>
                                 <Card style={{backgroundColor : 'rgba(0, 0, 0, 0.514)'}}>
                                    <CardMedia
                                       image={island2}
                                       title="Island1"
                                       className={style.cardMediaImg}
                                    />
                                    <CardContent style={{color:'white'}}>
                                       <Typography gutterBottom variant="h5" component="h2">
                                          Lizard
                                       </Typography>
                                       <Typography variant="body2" component="p">
                                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                          across all continents except Antarctica
                                       </Typography>
                                    </CardContent>
                                 </Card>
                              </Grow>
                           </Grid>
                        </Grid>
                     )}
                  </Scene>
               </Controller>
            </Container>
         </Box>
      </ThemeProvider>
   )
}

export default LandingPage;