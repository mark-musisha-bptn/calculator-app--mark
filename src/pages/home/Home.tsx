import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ValueContext } from '../../state/valueContext/ValueContext';
import { FunctionPad, NumPad, Screen } from '../../ui/molecules';
import { View } from '../../ui/atoms';
import './homeStyle.scss';

export const Home = () => {
  const { expression, answer } = useContext(ValueContext);

  return (
    <View>
      <Typography className='description' variant='h3'>
        Calculate
      </Typography>
      <Screen expression={expression} answer={answer} />
      <Box className='calculator-keyboard'>
        <FunctionPad />
        <NumPad />
      </Box>
    </View>
  );
};
