import { Button, styled } from '@mui/material';

export const NumberButton = styled(Button)(({ ...rest }) => ({
  background: '#888fa1',
  color: '#fff',
  width: '8rem',
  height: '4.5rem',
  margin: '1rem 0.6rem',
  fontSize: '2.2rem',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '1rem 1rem 1.8rem 1.8rem',
  outline: 'none',
}));
