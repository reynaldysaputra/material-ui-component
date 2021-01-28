import { Fragment } from 'react';
import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

const styles = makeStyles((theme) => ({
   containerGridPaper : {
      width : '100%',
      minHeight : '100vh',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center'
   },
   paper1 : {
      width : '100px',
      height : '100px',
      background : 'white',
      marginBottom : '5%'
   }
}))

function Papers() {
   const stylesPapers = styles();

   return(
      <Fragment>
         <div className={stylesPapers.containerGridPaper}>  
            <Paper elevation={2} className={stylesPapers.paper1} square></Paper>
            <Paper variant='outlined' className={stylesPapers.paper1} square={false}></Paper>
         </div>
      </Fragment>
   )
}

export default Papers;