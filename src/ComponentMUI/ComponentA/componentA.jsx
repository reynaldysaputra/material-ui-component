import React from 'react';
import { Fragment, useState } from 'react';
import AccordionComponent from './accordion';
import AlertComponent from './alert';
import AppBarComponent from './appBar';
import AutoCompleteComponent from './autoComplete';

function ComponentA() {
   return(
      <Fragment>
         <AccordionComponent/>
         <AlertComponent/>
         <AppBarComponent/>
         <AutoCompleteComponent/>
      </Fragment>
   )
}

export default ComponentA;