import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import SignUpForm from 'src/containers/forms/SignUpForm';
import LoginForm from 'src/containers/forms/LoginForm';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'red',
  },
});
import './styles.scss';

const Home = ({ isLogged, isAdmin }) => {
  const classes = useStyles();
  //  changes the display of the form according to the selected button
  const [selectedButtonSignUp, setSelectedButtonSignUp] = useState(false);

  const { state } = useLocation();

  if (isLogged && isAdmin) {
    return <Redirect to={state?.from || '/dashboard'} />;
  }
  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }

  const changeFormToLoginForm = () => {
    setSelectedButtonSignUp(false);
  };
  const changeFormToSignUpForm = () => {
    setSelectedButtonSignUp(true);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      xs={6}
    >
      <Grid item xs={12} container>
        <Paper
          elevation={0}
          style={{
            background: 'rgba( 255, 255, 255, 0.20 )',
            backdropFilter: 'blur( 11.5px )',
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="home"
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              className="home__header"
            >
              <Typography
                variant="h2"
                component="h1"
                style={{ color: 'white' }}
                className="home__header__title"
              >
                Shared Organizer
              </Typography>
              <h2 className="home__header__subtitle">How does it works ?</h2>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              className="home__main"
            >
              <div className="home__main__form-container">
                {selectedButtonSignUp ? <SignUpForm /> : <LoginForm />}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="flex-end"
        className="home__main__btns-container"
        style={{ backgroundColor: 'red' }}
      >
        <Grid item xs={2}>
          <Button
            className={classes.btn}
            type="button"
            // className="home__main__btns-container--signup"
            onClick={changeFormToSignUpForm}
          >
            Create group
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            type="button"
            className="home__main__btns-container--login"
            onClick={changeFormToLoginForm}
          >
            Sign in
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  isLogged: PropTypes.bool,
};

Home.defaultProps = {
  isLogged: false,
};

export default Home;
