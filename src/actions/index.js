// import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../constants'
import getDataApi from '../data/api'

export const selected_tab = (tabId) => {
	return {
		type: 'selected_tab',
		payload: tabId
	}
}

export const getData = () => {
	return {
		type: 'FETCHING_DATA'
	}
}

export const getDataSuccess = data => {
	return {
		type: 'FETCHING_DATA_SUCCESS',
		// payload: data
		data
	}
}

export const getDataFailure = () => {
	return {
		type: 'FETCHING_DATA_FAILURE'
	}
}

export const sendData = () => {
	return {
		type: 'FETCHING_SEND_DATA'
	}
}

export const sendDataSuccess = data => {
	return {
		type: 'FETCHING_SEND_DATA_SUCCESS',
		data
	}
}

export const sendDataFailure = () => {
	return {
		type: 'FETCHING_SEND_DATA_FAILURE'
	}
}

//Las otras action regresan un objeto
export const fetchData = () => {
	// return a function con la libreria redux-thunk
	return (dispatch) => {
		dispatch(getData())
		getDataApi()
		// console.log("getDataApi")
		// console.log(getDataApi())
			.then(([response, json]) => {
				// console.log("json")
				// console.log(json)
				dispatch(getDataSuccess(json))

			})
			.catch((err) => console.log(err))
	}
}

export const fetchServer = (values) => {
	// console.log("Action dispatch")
	return(dispatch) => {

		dispatch(sendData())
		fetch('https://jsonplaceholder.typicode.com/posts', {
		    method: 'POST',
		    body: JSON.stringify(
		      values
		    ),
		    headers: {
		      "Content-type": "application/json; charset=UTF-8"
		    }
		  })
		  .then(response => response.json())
		  .then(json => sendDataSuccess(json))
		  // .then(json => sendDataSuccess(console.log(json)))
	}
}