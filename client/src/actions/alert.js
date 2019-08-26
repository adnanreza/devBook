import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './tpyes';

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4(); // generate random id
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
