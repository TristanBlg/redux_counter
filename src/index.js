import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import pReducers from './reducers'
import Counter from './components/App'
import './styles.scss'

const store 	= createStore(pReducers)
const rootEl 	= document.getElementById('root')

render(
	<Provider store={store}>
		<Counter/>
	</Provider>,
	rootEl
)
