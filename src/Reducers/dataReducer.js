import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_SEND_DATA, FETCHING_SEND_DATA_SUCCESS, FETCHING_SEND_DATA_FAILURE} from '../constants'

const initialState = {
	data: [],
	isFetching: false,
	error: false
}

const dataReducer = (state = initialState, action) => {
	switch(action.type){
		case FETCHING_DATA:
			return {
				...state,
				data: [],
				isFetching: true
			}
		case FETCHING_DATA_SUCCESS:
			return {
				...state,
				data: action.data,
				isFetching: false //porque ya resivnimos los datos
			}
		case FETCHING_DATA_FAILURE:
			return {
				...state,
				isFetching: false,
				error:true
			}
		case FETCHING_SEND_DATA:
			return {
				...state,
				data: [],
				isFetching: true
			}
		case FETCHING_SEND_DATA_SUCCESS:
			return {
				...state,
				data: action.data,
				isFetching: false //porque ya resivnimos los datos
			}
		case FETCHING_SEND_DATA_FAILURE:
			return {
				...state,
				isFetching: false,
				error:true
			}
		default:
			return state //Si no hay ningun caso de los anteriores regresamos el state
	}
}

export default dataReducer