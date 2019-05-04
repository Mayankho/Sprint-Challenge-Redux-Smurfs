import { FETCHING, GET_SMURFS, ERR, ADDING, CREATE_SMURF } from '../actions'


 
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 const rootReducer = (state = initialState, action) => {
   switch(action.type){
    case FETCHING:
    return {...state, fetchingSmurfs: true}
    case GET_SMURFS:
    return {...state, smurfs: [...action.payload], fetchingSmurfs: false}
    case ERR:
    return {...state, fetchingSmurfs: false, error: action.payload}
    case ADDING:
    return {...state, addingSmurf: true}
    case CREATE_SMURF:
    return { ...state, smurfs: action.payload, addingSmurf: false };
     default: 
     return state
   }
 }

 export default rootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
