import { Button } from '@material-ui/core';
import React from 'react';
import { useStyle } from './style';

export function MyButton(props){
   const { color, ...other } = props;
   const style = useStyle(props);

   return <Button className={style.myButtons} {...other} />
}
