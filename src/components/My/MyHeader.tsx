import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  appbar: { alignItems: 'center' },
}));

export default function MyHeader() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appbar}>
      <Toolbar>
        {[
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Chat with me', href: '#chat' },
        ].map(({ href, label: name }, i) => (
          <Typography variant='h5' key={i}>
            <Button color='inherit' variant='text' href={href}>
              {name}
            </Button>
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
}
