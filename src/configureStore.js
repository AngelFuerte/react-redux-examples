import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers'
import thunk from 'redux-thunk'

// export default configureStore = () {
// 	let store = createStore(reducers, applyMiddleware(thunk))
// 	return store
// }

const configureStore = () => {
	let store = createStore(reducers, applyMiddleware(thunk))
	return store
}
export default configureStore