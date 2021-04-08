import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { IProps } from '../models';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

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
