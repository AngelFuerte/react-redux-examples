import React, {Component} from 'react'

import * as action from '../../actions'
import {connect} from 'react-redux'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class TabBarList extends Component{
	
	handleClick(e){
		alert("Realizaste un click")
	}

	render(){
		//console.log(this.props)
		return (
			<div className="TabBarList">
				<h1>TabBarList</h1>
				<h1> Modificaciones en Git </h1>
					<Button color="success"  id="tab_1" Onclick= { this.handleClick } >TAB_1</Button>
					<Button color="success" id="tab_2" Onclick= { this.handleClick } >TAB_2</Button>
					<Button color="success" id="tab_3" Onclick= { this.handleClick } >TAB_3</Button>

					<h1>Commit en la rama test</h1>
					<Button color="danger" id="tab_3" Onclick= { this.handleClick } >Hola</Button>
			</div>
		)

	}
}

const mapStateToProps = state => {
	return {tabsId: state.tabId}
}

export default connect (mapStateToProps, action)(TabBarList)