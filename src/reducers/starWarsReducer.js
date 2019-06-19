import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions';
const initialState = {
	error      : null,
	fetching   : false,
	characters : [],
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return { ...state, fetching: true, error: null };
		case FETCH_SUCCESS:
			return { ...state, fetching: false, characters: action.payload };
		case FETCH_ERROR:
			return { ...state, fetching: false, error: 'BAM! You broke it.' };
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		default:
			return state;
	}
};
