//Dependencies
import React, { Component } from 'react';

import ComponentListado from './ComponentListado';

class ListAddOption extends Component{
	constructor(props){
		super(props)
		this.state = {
	      menuOptions: ['Agel', 'Pedro', 'Manuel']
	    }
	}
	render(){
		// let menuOptions = ['Agel', 'Pedro', 'Manuel']
		return(
			<div className="ListAddOption">
				<h1> ListAddOption </h1>
					<ComponentListado options={this.state.menuOptions}
        			onAddOption = {this.handleAddOption.bind(this)} />
			</div>
		);
	}

	handleAddOption () {
    this.setState({    	
      	menuOptions: this.state.menuOptions.concat("Martin")
    })
  }
}

export default ListAddOption;