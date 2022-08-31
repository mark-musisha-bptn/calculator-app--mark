import { styled, TextField } from '@mui/material';

export const Input = styled(TextField)(({ ...rest }) => ({
  backgroundColor: '#b2c2b3',
  maxHeight: '3rem',
  outline: 'none',
  width: '100%',

  '&:active': {
    border: 'none',
    backgroundColor: 'red',
  },

  '& .MuiInputBase-input': {
    fontSize: '2rem',
    textAlign: 'right',
    borderColor: 'red',
  },
  ...rest,
}));

export const DisplayLog = styled(TextField)(({ ...rest }) => ({
  backgroundColor: '#b2c2b3',
  maxHeight: '44px',
  outline: 'none',
  width: '100%',

  '& .MuiInputBase-input': {
    fontSize: '2rem',
    textAlign: 'left',
  },
  ...rest,
}));
