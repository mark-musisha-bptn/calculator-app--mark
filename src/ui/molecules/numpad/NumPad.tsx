import { Box } from '@mui/material';
import { useOnClear } from '../../../hooks/use-onClear/useOnClear';
import { useOnDelete } from '../../../hooks/use-onDelete/useOnDelete';
import { useReturnAnswer } from '../../../hooks/use-returnAnswer/useReturnAnswer';
import { useInput } from '../../../hooks/use-Input/useInput';
import { Key } from '../../atoms';
import './numpadStyle.scss';

export const NumPad = () => {
  const { onValueChange } = useInput();
  const { onReturn } = useReturnAnswer();
  const { onClear } = useOnClear();
  const { onDelete } = useOnDelete();

  return (
    <Box className='calculator-keyboard__keys-container'>
      <Key label={'1'} onClick={onValueChange} value='1' />
      <Key label={'2'} onClick={onValueChange} value='2' />
      <Key label={'3'} onClick={onValueChange} value='3' />
      <Key
        label={'DEL'}
        onClick={onDelete}
        value='DEL'
        className='active-btns'
      />
      <Key label={'AC'} onClick={onClear} value='ac' className='active-btns' />
      <Key label={'4'} onClick={onValueChange} value='4' />
      <Key label={'5'} onClick={onValueChange} value='5' />
      <Key label={'6'} onClick={onValueChange} value='6' />
      <Key label={'x'} onClick={onValueChange} value='*' />
      <Key label={'7'} onClick={onValueChange} value='7' />
      <Key label={'8'} onClick={onValueChange} value='8' />
      <Key label={'9'} onClick={onValueChange} value='9' />
      <Key label={'/'} onClick={onValueChange} value='/' />
      <Key label={'0'} onClick={onValueChange} value='0' />
      <Key label={'+'} onClick={onValueChange} value='+' />
      <Key label={'-'} onClick={onValueChange} value='-' />
      <Key label={'.'} onClick={onValueChange} value='.' />
      <Key label={'='} onClick={onReturn} value='=' />
    </Box>
  );
};
