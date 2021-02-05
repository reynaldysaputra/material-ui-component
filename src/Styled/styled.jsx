import React from 'react';
import { Fragment } from 'react';
import {useStyle} from './style';
import { Button } from '@material-ui/core';
import { MyButton } from './myComponent';
import PropTypes from 'prop-types';


function StyledComponetMUI() {
   const color = ['red','blue'];
   const style = useStyle(color);

   return(
      <Fragment>
         {/* -------- Nesting Selectors --------*/}
         <div className={style.nestingContainer}>
            Nesting Selectors
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing.
               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloribus.</span>
            </p>
         </div>

         <MyButton variant='contained' color='red'>RED</MyButton>
         <MyButton variant='contained' color='blue'>BLUE</MyButton>
         
      </Fragment>
   )
}

export default StyledComponetMUI;