import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './components/App'
import './styles.scss'

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const rootEl = document.getElementById('root')

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	rootEl
)
