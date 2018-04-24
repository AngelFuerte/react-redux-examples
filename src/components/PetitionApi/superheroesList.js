//Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchData} from '../../actions'

class superheroesList extends Component{
	

	componentWillMount(){
		// console.log(this.props.fetchData)
		this.props.fetchData()

	}

	getTvShows(){
		const {dataTvMaze} = this.props

		// console.log("TvShows"+ dataTvMaze)
		const dataTvShow = dataTvMaze.data.map((tv, key) => {
			return <li key={key}>{tv.show.name}</li>
		})
		return dataTvShow
	}

	render(){
		// console.log(this.props)
		return(

			<div className="superheroesListApi">
				<h1>Superheroes List API</h1>
				{this.props.dataTvMaze.isFetching && <h1> Loading ... </h1>}
				{
					this.props.dataTvMaze.data.length ?
						this.getTvShows()
						: null
				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	//
	return {dataTvMaze: state.dataReducer}

}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(superheroesList);