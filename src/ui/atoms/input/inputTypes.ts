import { StandardTextFieldProps } from '@mui/material';
import React from 'react';

export interface IinputProps extends StandardTextFieldProps {
  type?: 'outlined' | 'filled' | 'standard' | undefined;
  inputType?: 'log';
}
