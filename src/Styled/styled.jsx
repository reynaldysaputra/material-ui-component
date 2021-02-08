import React, { useState, useEffect } from 'react';
import {useStyle} from './style';
import Box from '@material-ui/core/Box';
import { MyButton } from './myComponent';
import { styled, Button, LinearProgress, Typography, ThemeProvider, CssBaseline } from '@material-ui/core';
import {themeStyled} from './theme';

const StyledButton = styled(({ color, ...other }) => (
   <Button classes={{ label: 'xx' }} {...other} />
))`
   background-color: #6772e5;
   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
   padding: 7px 14px;
   &:hover {
      background-color: #5469d4;
   }
   & .label {
      color: #fff;
   }
`;

function StyledComponetMUI() {
   const color = ['red','blue'];
   const style = useStyle(color);
   const [active, setActive] = useState(null);
   const [timer, setTimer] = useState(30);

   const handleActive = (index) => {
      setActive(index);
   }

   useEffect(() => {
      const times = setInterval(() => {
         setTimer((oldProgress) => {
            if (oldProgress === 0) {
               return oldProgress;
            }

            return oldProgress-1;
         });
      }, 1000);

      return () => {
         clearInterval(times);
      };
   }, []);

   return(
      <ThemeProvider theme={themeStyled}>
         <CssBaseline/>
         {console.log(themeStyled)}
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
         <Box
            fontSize={{sm : 'h6.fontSize', md: 'h4.fontSize'}}
            color={{sm:'red', md:'blue'}}
         >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eos.
         </Box>
         <StyledButton color='primary'>Hello i'am styled button</StyledButton>

         {['A','B','C','D'].map((item,index) => (
            <MyButton 
               className={active === index ? style.activeBoxQuiz : style.unActiveBoxQuiz} 
               onClick={() => handleActive(index)}
               key={index}
            >{item}. Lorem ipsum dolor sit amet.</MyButton>
         ))}

         <Typography variant='h3'>{timer !== 0 ? `0:${timer}` : 'Time Out'}</Typography>
         <LinearProgress 
            variant='determinate'  
            value={timer}
            style={{width:'80%', margin:'auto',marginTop : '2vh'}}
         />
         <Typography variant='h3'>My Styled Font</Typography>
      </ThemeProvider>
   )
}

export default StyledComponetMUI;