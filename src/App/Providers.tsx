import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { IProps } from '../models';
import { AuthProvider } from './AuthContext';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7986cb' },
    secondary: pink,
  },
});
export const Providers = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
);
