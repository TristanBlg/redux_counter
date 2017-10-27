import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Count from '../components/Count'

const mapStateTopProps = (state) => {
	return {
		count: state.count
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		}
	}
}

const Counter = connect(
	mapStateTopProps,
	mapDispatchToProps
)(Count)

export default Counter
