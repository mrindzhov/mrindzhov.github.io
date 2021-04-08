import { Button, makeStyles, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HomePageHeader from './HomePageHeader';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage = 'https://source.unsplash.com/random?auto=format&fit=crop&w=1400&q=80';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <HomePageHeader />
      <ProductHeroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        {/* style={{ display: 'none' }} */}
        <img src={backgroundImage} alt='increase priority' />
        <Typography color='inherit' align='center' variant='h2'>
          Share your skills
        </Typography>
        <Typography color='inherit' align='center' variant='h5' className={classes.h5}>
          Enjoy the flexibility to create and host your own resume in minutes
        </Typography>
        <Button
          color='secondary'
          variant='contained'
          size='large'
          className={classes.button}
          component={NavLink}
          to='/sign/up'>
          Join now
        </Button>
        <Typography variant='body2' color='inherit' className={classes.more}>
          Discover the experience
        </Typography>
      </ProductHeroLayout>
    </>
  );
}
