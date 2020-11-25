import * as actionType from '../actions/ActionType';

const listReducer = (state=[], action) => {
  let newState;
  console.log(action);
  switch (action.type) {
  	case actionType.GET_LIST:
  		return newState = action.payload;
    default:
      return state
  }
}

export default listReducer;
