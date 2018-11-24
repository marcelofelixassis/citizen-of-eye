import { SOCIAL_UPDATED } from '../util/constants'

const initialState = {
	social: []
};

export const socialReducer = (state = initialState, action) => {
	switch (action.types) {
		case SOCIAL_UPDATED:
			return {
				...state,
				social: action.social
			};
		default:
			return state;
	}
};