/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const ERROR = 'ERROR';

export const GET_SMURFS_START = 'GET_DATA_START';
export const GET_SMURFS_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_DATA_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';




/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: GET_SMURFS_START })
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({
          type: GET_SMURFS_SUCCESS,
          payload: res.data
        });
      })
      .catch( err => {
        dispatch({
          type: GET_SMURFS_FAILURE,
          payload: err
        })
      })
      
  }
}

export const addSmurf = newSmurf => {
  return dispatch => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(({ data }) => {
        dispatch({ 
          type: ADD_SMURF, 
          payload: data
        })
      })
      .catch(err => {
        dispatch({ 
          type: Error, 
          payload: err 
        })
      })
  }
}