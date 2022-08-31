import { Box } from '@mui/material';
import { FC, useContext } from 'react';
import { DisplayField } from '../../atoms';
import './screenStyle.scss';
import { ScreenProps } from '.';
import { useReturnAnswer } from '../../../hooks/use-returnAnswer/useReturnAnswer';
import { ValueContext } from '../../../state/valueContext/ValueContext';

export const Screen: FC<ScreenProps> = () => {
  const { expression, answer } = useContext(ValueContext);
  return (
    <Box className='calculator-screen'>
      <DisplayField
        value={expression}
        type='standard'
        fullWidth
        inputType='log'
        autoFocus
      />
      <DisplayField value={answer} type='standard' fullWidth />
    </Box>
  );
};
