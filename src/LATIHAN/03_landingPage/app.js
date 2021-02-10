import React, {useState} from 'react';
import { AppBar, Box, Card, CardMedia, CardContent, Container, Grid, IconButton, ThemeProvider, Toolbar, Typography, Divider, useMediaQuery, Collapse } from '@material-ui/core';
import { themeLanding } from './theme';
import { useStyleLanding } from './style';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import island1 from './island2.jpg';
import island2 from './island1.jpg';
import ExploreIcon from '@material-ui/icons/Explore';

function LandingPage() {
   const style = useStyleLanding();
   const mediaQuery = useMediaQuery(theme => theme.breakpoints.up('md'));
   const [checked, setCheked] = useState(false);
   
   return(
      <ThemeProvider theme={themeLanding}>
         {console.log(themeLanding)}
         <Box className={style.rootPage}>
            <Box className={style.header}>
               <AppBar>
                  <Toolbar>
                     <Container maxWidth='md' className={style.appBarContainer}>
                        <Typography variant='h5' className={style.appBarTitle}>
                           My<span className={style.colorHeader}>Island</span>.
                        </Typography>

                        <IconButton onClick={() => setCheked(!checked)}>
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
                     <IconButton className={style.goDown}>
                        <KeyboardArrowDownIcon color='primary' fontSize='large' />
                     </IconButton>
                  </Box>
               </Collapse>
            </Box>
            
            <Container maxWidth='md'>
               <Grid container justify='center' alignContent='center' className={style.content1}>
                  <Grid item md={5} xs={12}>
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
                  </Grid>
                  <Grid item container alignContent='center' alignItems='center' justify='center' md={2} xs={12} style={{textAlign:'center'}}>
                     <Grid item xs={5} md='auto' className={style.gridContainerDividerContent1}>
                        <Divider variant='middle'  orientation={mediaQuery ? 'vertical' : 'horizontal'} className={style.dividerCard}  />
                     </Grid>
                     <Grid item xs={2} md={12} style={{height:'auto'}}>
                        <IconButton>
                           <ExploreIcon className={style.ExploreIcon}/>
                        </IconButton>
                     </Grid>
                     <Grid item xs={5} md='auto' className={style.gridContainerDividerContent1}>
                        <Divider variant='middle' orientation={mediaQuery ? 'vertical' : 'horizontal'} className={style.dividerCard}  />
                     </Grid>
                  </Grid>
                  <Grid item md={5} xs={12}>
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
                  </Grid>
               </Grid>
            </Container>
         </Box>
      </ThemeProvider>
   )
}

export default LandingPage;