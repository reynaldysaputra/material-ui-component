import React from 'react';
import { Fragment, useState } from 'react';
import AccordionComponent from './accordion';
import AlertComponent from './alert';

function ComponentA() {
   return(
      <Fragment>
         <AccordionComponent/>
         <AlertComponent/>
      </Fragment>
   )
}

export default ComponentA;