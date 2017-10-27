import * as React from 'react'

type Props = {
	count: number,
	increment: Function,
	decrement: Function
};

export default class Count extends React.Component<Props> {
	render() {
		const { count, increment, decrement } = this.props
		return (
			<div className="counter">
				<p className="counter__count">Count : { count }</p>
				<div>
					<button className="counter__btn counter__btn--increment" onClick={increment}>Increment</button>
					<button className="counter__btn counter__btn--decrement" onClick={decrement}>Decrement</button>
				</div>
			</div>
		)
	}
}