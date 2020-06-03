import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign in to your Account
      </p>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={(e) => onSubmit(e)}
      >
        <div>
          <TextField
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            id='outlined-required'
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <TextField
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            id='outlined-required'
            onChange={(e) => onChange(e)}
            minLength='6'
            required
          />
        </div>

        <Button variant='contained' color='primary' type='submit' value='Login'>
          Sign In
        </Button>
      </form>
      <p className='my-1'>
        Don't have an account <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
