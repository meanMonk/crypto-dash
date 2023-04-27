import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './light';

interface Props {
  children: ReactNode
}

const Theme: React.FC<Props> = ({
  children
}: Props) => {

  return (
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider >
  )
}

export default Theme
