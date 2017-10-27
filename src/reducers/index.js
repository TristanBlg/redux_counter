import { combineReducers } from 'redux'
import types from '../actions/actionTypes.js'

const count = (state = 0, action) => {
	switch (action.type) {
		case types.increment:
			return state + 1
		case types.decrement:
			return state - 1
		default:
			return state
	}
}

const reducers = combineReducers({
	count
})

export default reducers
