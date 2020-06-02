import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

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

const Education = ({ education, deleteEducation }) => {
  const classes = useStyles();

  const educations = education.map((edu) => (
    <TableRow key={edu._id}>
      <TableCell>{edu.school}</TableCell>
      <TableCell className='hide-sm'>{edu.degree}</TableCell>
      <TableCell>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Present'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </TableCell>
      <TableCell>
        <Button
          variant='contained'
          onClick={() => deleteEducation(edu._id)}
          color='secondary'
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>
        Education Credentials
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>School</TableCell>
                <TableCell className='hide-sm'>Degree</TableCell>
                <TableCell className='hide-sm'>Years</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{educations}</TableBody>
          </Table>
        </TableContainer>
      </h2>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
