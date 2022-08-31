import { Box, Button } from '@mui/material';
import React from 'react';
import './functionPadStyle.scss';

export const FunctionPad = () => {
  return (
    <Box className='calculator-keyboard__function-container'>
      <Button className='calculator-keyboard__key function-btn'>
        &#x1D4B3; <sup>-1</sup>
      </Button>
      <Button className='calculator-keyboard__key function-btn'>&radic;</Button>
      <Button className='calculator-keyboard__key function-btn'>
        &#x1D4B3;<sup>2</sup>
      </Button>
      <Button className='calculator-keyboard__key function-btn'>^</Button>
      <Button className='calculator-keyboard__key function-btn'>log</Button>
      <Button className='calculator-keyboard__key function-btn'>ln</Button>
      <Button className='calculator-keyboard__key function-btn'>
        (&minus;)
      </Button>
      <Button className='calculator-keyboard__key function-btn'>
        &#x1D4B3; <sup>3</sup>
      </Button>
      <Button className='calculator-keyboard__key function-btn'>hyp</Button>
      <Button className='calculator-keyboard__key function-btn'>sin</Button>
      <Button className='calculator-keyboard__key function-btn'>cos</Button>
      <Button className='calculator-keyboard__key function-btn'>tan</Button>
      <Button className='calculator-keyboard__key function-btn'>RCL</Button>
      <Button className='calculator-keyboard__key function-btn'>ENG</Button>
      <Button
        className='calculator-keyboard__key function-btn'
        value='('
        // onClick={onValueChange}
      >
        (
      </Button>
      <Button
        className='calculator-keyboard__key function-btn'
        value=')'
        // onClick={onValueChange}
      >
        )
      </Button>
      <Button className='calculator-keyboard__key function-btn'>,</Button>
      <Button className='calculator-keyboard__key function-btn'>M+</Button>
    </Box>
  );
};
