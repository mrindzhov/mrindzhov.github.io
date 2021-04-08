import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { IProps } from 'models/user.models';
import { ErrorBoundary } from './ErrorBoundary';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#7986cb' },
    secondary: pink,
  },
});

export const Providers = ({ children }: IProps) => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  );
};
