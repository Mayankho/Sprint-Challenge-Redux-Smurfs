import axios from 'axios';
export const FETCHING = 'Fetching';
export const GET_SMURFS = 'GET_SMURFS';
export const ERR = 'ERR';
export const ADDING = 'ADDING';
export const CREATE_SMURF = 'CREATE_SMURF'


export const getSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({type: FETCHING})
    promise
    .then(({data}) => {
      console.log('RESPONSE', data)
      dispatch({type: GET_SMURFS, payload: data})
    })
    .catch(err => {
      dispatch({type: ERR, payload: err})
    })
  }
}

export const createSmurf = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({type: ADDING})
    promise
    .then(({data}) => {
      console.log('CREATE', data)
      dispatch({type: CREATE_SMURF, payload: data})
    })
    .catch(err => {
      dispatch({type: ERR, payload: err})
    })
  }
}
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
