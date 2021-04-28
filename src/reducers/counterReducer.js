import ActionTypes from '../Actions'

const intialState = {
	count: 0
}

export default function counterReducer(state = intialState, action) {
	switch (action.type) {
		case ActionTypes.INCREASE_COUNT:
			return { count: state.count + 1 }
		case ActionTypes.DECREASE_COUNT:
			return { count: state.count - 1 }
		default:
			return state
	}
}
