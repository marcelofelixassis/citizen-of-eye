import { DEPUTIES_UPDATED } from '../util/constants'

const initialState = {
	deputies: []
};

export const deputiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case DEPUTIES_UPDATED:
			return {
				...state,
				deputies: action.deputies
			};
		default:
			return state;
	}
};