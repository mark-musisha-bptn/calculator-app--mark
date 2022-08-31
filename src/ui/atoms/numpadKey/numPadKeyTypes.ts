import { ButtonProps } from '@mui/material';
import React, { ReactNode } from 'react';

export interface IKeyProps extends ButtonProps {
  label: string | ReactNode;
}
