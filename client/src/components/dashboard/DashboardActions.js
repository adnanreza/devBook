import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Button component={Link} variant='outlined' color='primary'>
        <Link to='/edit-profile'>
          <i className='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>
      </Button>{' '}
      <Button component={Link} variant='outlined' color='primary'>
        <Link to='/add-experience'>
          <i className='fab fa-black-tie text-primary'></i> Add Experience
        </Link>
      </Button>{' '}
      <Button component={Link} variant='outlined' color='primary'>
        <Link to='/add-education'>
          <i className='fas fa-graduation-cap text-primary'></i> Add Education
        </Link>
      </Button>
    </div>
  );
};

export default DashboardActions;
