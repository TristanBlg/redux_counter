import { combineReducers } from 'redux'

const count = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

const pReducers = combineReducers({
	count
})

export default pReducers
