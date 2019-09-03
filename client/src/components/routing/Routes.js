import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../layout/NotFound';
import '../../App.css';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exaxt path='/dashboard' component={Dashboard} />
        <PrivateRoute exaxt path='/create-profile' component={CreateProfile} />
        <PrivateRoute exaxt path='/edit-profile' component={EditProfile} />
        <PrivateRoute exaxt path='/add-experience' component={AddExperience} />
        <PrivateRoute exaxt path='/add-education' component={AddEducation} />
        <PrivateRoute exaxt path='/posts' component={Posts} />
        <PrivateRoute exaxt path='/post/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
