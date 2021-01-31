import React, { Fragment, useState } from 'react';
import { Grid , Typography, AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Badge, InputBase, Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import {UseStyleA} from './style';

function AppBarComponent() {
   const styleA = UseStyleA();
   const [anchor, setAnchor] = useState(null);
   const [anchorM, setAnchorM] = useState(null);
   let [isOpen, setOpen] = useState(false);
   let [isOpenM, setOpenM] = useState(false);

   const handleMenuClose = () => {
      setAnchor(null);
      setOpen(false);
      setOpenM(false);
   }

   const handleMenuOpenDesktop = (event) => {
      setAnchor(event.currentTarget);
      console.log(event.currentTarget);
      setOpen(true);
   }

   const handleMenuOpenMobile = (event) => {
      setAnchorM(event.currentTarget);
      setOpenM(true);
   }

   const renderMenu = (
      <Menu
         anchorEl={anchor}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={isOpen}
         onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
         anchorEl={anchorM}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={isOpenM}
         onClose={handleMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleMenuOpenDesktop}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

   return(
      <Fragment>
         <Grid container justify='center' className={styleA.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>AppBar</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12}>
                  <AppBar position="static">
                     <Toolbar>
                        <IconButton edge="start" className={styleA.menuButton} color="inherit" aria-label="menu">
                           <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={styleA.title}>
                           News
                        </Typography>
                        <Button color="inherit">Login</Button>
                     </Toolbar>
                  </AppBar>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2</Typography>
               </Grid>
               <Grid item xs={12}>
                  <AppBar position="static">
                     <Toolbar>
                        <IconButton edge="start" className={styleA.menuButton} color="inherit" aria-label="menu">
                           <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={styleA.title}>
                           News
                        </Typography>
                        <div className={styleA.menuDesktop}>
                           <IconButton aria-label="show 4 new mails" color="inherit">
                              <Badge badgeContent={4} color="secondary">
                                 <MailIcon />
                              </Badge>
                              </IconButton>
                              <IconButton aria-label="show 17 new notifications" color="inherit">
                              <Badge badgeContent={17} color="secondary">
                                 <NotificationsIcon />
                              </Badge>
                           </IconButton>
                           <IconButton
                              color="inherit"
                              onClick={handleMenuOpenDesktop}
                           >
                              <AccountCircleIcon />
                           </IconButton>
                        </div>
                        <div className={styleA.menuMobile}>
                           <IconButton
                              color="inherit"
                              onClick={handleMenuOpenMobile}
                           >
                              <MoreVertIcon />
                           </IconButton>
                        </div>
                     </Toolbar>
                  </AppBar>
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3</Typography>
               </Grid>
               <Grid item xs={12}>
                  <AppBar position='relative'>
                     <Toolbar>
                        <IconButton edge="start" className={styleA.menuButton} color="inherit">
                           <MenuIcon/>
                        </IconButton>

                        <Typography className={styleA.title} variant='h6'>Covid App</Typography>

                        <div className={styleA.search}>
                           <div className={styleA.searchIcon}>
                              <SearchIcon />
                           </div>
                           <InputBase
                              placeholder="Search…"
                              classes={{
                                 root: styleA.inputRoot,
                                 input: styleA.inputSearch,
                              }}
                              inputProps={{ 'aria-label': 'search' }}
                           />
                        </div>
                     </Toolbar>
                  </AppBar>
               </Grid>
               {/*  ----- Type 4 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 4</Typography>
               </Grid>
               <Grid item xs={12}>
                  <Paper elevation={2} className={styleA.mobileStyle}>
                        <Typography variant='h6' style={{padding:'30px'}}>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur mollitia debitis error id corrupti obcaecati dolore, dicta vitae saepe ratione sunt, nulla eveniet possimus provident molestias similique veniam sequi! Nisi, blanditiis deserunt! Recusandae unde facilis velit quaerat tenetur illum repudiandae voluptatem iusto officiis cumque provident culpa corrupti fugiat eos esse rem similique possimus suscipit fuga dignissimos eligendi, ut harum aperiam odio? Nemo harum ipsam nobis deleniti cum eligendi id sed voluptatem dolores minima? Totam dignissimos ipsam corrupti quisquam suscipit fuga, consequuntur cupiditate modi quidem, ipsa ipsum, et cum repellendus perspiciatis? Reiciendis ipsam hic dolore magni, quibusdam incidunt optio temporibus?
                        </Typography>
                        <AppBar position='sticky' className={styleA.appBarMobile}>
                           <Toolbar>
                              <IconButton edge="start" className={styleA.menuButton} color="inherit" aria-label="menu">
                                 <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" className={styleA.title}>
                                 News
                              </Typography>
                              <Button color="inherit">Login</Button>
                           </Toolbar>
                        </AppBar>
                  </Paper>
               </Grid>
            </Grid>
         </Grid>

         {renderMenu}
         {renderMobileMenu}
      </Fragment>
   )
}

export default AppBarComponent;