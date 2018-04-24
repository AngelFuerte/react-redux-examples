//Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux'

class superheroesList extends Component{
	
	getSuperheroes(){
		const {superheroes} = this.props
		return superheroes.map((heroes, key) => {
			// console.log("Heroes"+heroes.superhero)
			return <li key={key}>{heroes.superhero}</li>
		})
	}

	render(){
		// console.log(this.props)
		return(

			<div className="superheroesList">
				<h1>Superheroes List JSON</h1>
				{this.getSuperheroes()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	//
	return {superheroes: state.superheroes}

}

export default connect(mapStateToProps)(superheroesList);