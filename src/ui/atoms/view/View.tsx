import { Box, styled } from '@mui/material';
import React, { FC } from 'react';
import { IviewProps } from './viewTypes';

const Div = styled(Box)(({ ...rest }) => ({
  width: 'min-content',
  margin: '0 auto',
  marginTop: '10rem',
  padding: '2.1rem',
  borderRadius: '1rem',
  background: '#4b5568',
}));

export const View: FC<IviewProps> = ({ children }) => {
  return <Div>{children}</Div>;
};
