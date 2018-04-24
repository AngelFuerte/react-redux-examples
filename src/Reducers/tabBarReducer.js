export default (state = 'TAB_1' , action) => {
	switch(action.type){
		case 'selected_tab':
			return action.payload //enviamos al state el id que seleccionamos
		default:
			return state 
	}
}