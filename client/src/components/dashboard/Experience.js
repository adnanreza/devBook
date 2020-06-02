import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Experience = ({ experience, deleteExperience }) => {
  const classes = useStyles();

  const experiences = experience.map((exp) => (
    <TableRow key={exp._id}>
      <TableCell>{exp.company}</TableCell>
      <TableCell className='hide-sm'>{exp.title}</TableCell>
      <TableCell>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Present'
        ) : (
          <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </TableCell>
      <TableCell>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger'
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>
        Experience Credentials
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell className='hide-sm'>Title</TableCell>
                <TableCell className='hide-sm'>Years</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{experiences}</TableBody>
          </Table>
        </TableContainer>
      </h2>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
