import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

function ErrorPage(){
   const history = useHistory();

   return(
      <Fragment>
         <h1>POKEMON NOT FOUND!</h1>
         <button onClick={() => history.push('/')}>Back</button>
      </Fragment>
   )
}

export default ErrorPage;