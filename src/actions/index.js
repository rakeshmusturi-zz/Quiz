import * as actionType from './ActionType';

export const loadList = (data) => ({
	type: actionType.GET_LIST,
	payload: data
});
