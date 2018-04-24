import React, {Component} from 'react'

import * as action from '../../actions'
import {connect} from 'react-redux'

class TabBarList extends Component{
	
	handleClick(e){
		alert("Realizaste un click")
	}

	render(){
		//console.log(this.props)
		return (
			<div className="TabBarList">
				<h1>TabBarList</h1>
					<button id="tab_1" Onclick= { this.handleClick } >TAB_1</button>
					<button id="tab_2" Onclick= { this.handleClick } >TAB_2</button>
					<button id="tab_3" Onclick= { this.handleClick } >TAB_3</button>
			</div>
		)

	}
}

const mapStateToProps = state => {
	return {tabsId: state.tabId}
}

export default connect (mapStateToProps, action)(TabBarList)