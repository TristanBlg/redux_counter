import types from './actionTypes.js'

export const increment = () => {
	return {
		type: types.increment
	}
}

export const decrement = () => {
	return {
		type: types.decrement
	}
}
