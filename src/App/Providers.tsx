import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { IProps } from '../models';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7986cb' },
    secondary: pink,
  },
});

export const Providers = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
