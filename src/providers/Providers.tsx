import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { IProps } from "models/user.models";
import { ErrorBoundary } from "./ErrorBoundary";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#7986cb" },
    secondary: pink,
  },
});

export const Providers = ({ children }: IProps) => {
  return (
    <ErrorBoundary>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </ErrorBoundary>
  );
};
