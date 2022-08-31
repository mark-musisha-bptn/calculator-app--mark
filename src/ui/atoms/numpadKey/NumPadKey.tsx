import React, { FC } from 'react';
import { IKeyProps, NumberButton } from '.';

export const Key: FC<IKeyProps> = ({ label, ...rest }) => {
  return <NumberButton {...rest}>{label}</NumberButton>;
};
