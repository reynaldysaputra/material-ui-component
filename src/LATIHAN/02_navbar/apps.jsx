import { AppBar, ThemeProvider, Toolbar, Typography, useMediaQuery, Menu, Link, Box, MenuItem, IconButton, Container, Hidden } from '@material-ui/core';
import React, {useState} from 'react';
import { useStyleNav } from './style';
import { themeNav } from './theme';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function NavbarTraining() {
   const style = useStyleNav();
   const isMobile = useMediaQuery(themeNav.breakpoints.down('sm'));
   const [open, setOpen] = useState(false);
   const [openMenu, setOpenMenu] = useState(false);
   
   return(
      <ThemeProvider theme={themeNav}>  
         <AppBar className={style.appBar} position='fixed'>
            <Container maxWidth='lg' style={{padding : isMobile && '0px', background:themeNav.palette.primary.main}}>
               <Toolbar>
                  {/* Mobile */}
                  <Hidden mdUp>
                     <IconButton 
                        color='inherit' 
                        style={{padding:'0px', visibility : openMenu ? 'hidden' : 'visible'}} 
                        onClick={() => setOpenMenu(!openMenu)}
                     >   
                        <MenuIcon/>
                     </IconButton>
                     <Link variant='h3' className={style.logoContent}>CodingNepal</Link>
                     {open || openMenu ? 
                        <CloseIcon 
                           style={{marginLeft:'auto', color:'red', cursor:'pointer'}}
                           onClick={(e => {
                              if(openMenu) return setOpenMenu(false);
                              return setOpen(!open);
                           })}
                        /> : <SearchIcon 
                           style={{marginLeft:'auto', cursor:'pointer'}}
                           onClick={(e => setOpen(!open))}
                        />
                     }
                  </Hidden>

                  {/*  Tablet-Desktop */}
                  <Hidden smDown>
                     <Link variant='h3' className={style.logoContent}>CodingNepal</Link>
                  </Hidden>

                  <Box 
                     className={isMobile ? style.menuContentMobile : style.menuContent}
                     style={isMobile ? {bottom : openMenu ? '-100vh' : '20vh'} : null}
                     zIndex={isMobile ? '-1' : null}
                  >
                     <Link>Menu</Link>
                     <Link>About</Link>
                     <Link>Blogs</Link>
                     <Link>Contact</Link>
                     <Link>Feedback</Link>
                  </Box>

                  <Box 
                     className={isMobile ? style.searchBoxMobile : style.searchBox} 
                     style={isMobile ? {visibility : open ? 'visible' : 'hidden'} : null}
                  >
                     <Box style={{border : '1px solid #333', borderRadius:'3px'}}>
                        <input 
                           placeholder='Search' 
                           className={style.inputSearch}
                        />
                     </Box>
                     <Box>
                        <SearchIcon className={style.searchIcon}/>
                     </Box>
                  </Box>

               </Toolbar>
            </Container>
         </AppBar>

      </ThemeProvider>
   )
}

export default NavbarTraining;