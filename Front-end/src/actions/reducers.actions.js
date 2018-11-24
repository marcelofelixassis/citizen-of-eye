import * as constants from '../util/constants';

export const reducersActions = {
    updateDeputiesReducer,
    updateSocialReducer
}

function updateDeputiesReducer(deputies) {
	return (dispatch) => {
		dispatch({
			type: constants.DEPUTIES_UPDATED,
			deputies
		})
	}
}

function updateSocialReducer(social) {
    return (dispatch) => {
        dispatch({
            type: constants.SOCIAL_UPDATED,
            social
        })
    }
}