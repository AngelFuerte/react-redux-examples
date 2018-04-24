//Dependencies
import React, { Component } from 'react';

class ComponentListado extends Component {
 

  render() {
  	let options = this.props.options
    return (
      <div className="list">
       <ul>
        	{options.map(option => <li>{option}</li>)}
       </ul>
       <button onClick={this.props.onAddOption}>Nueva Opción</button>
      </div>
    );
  }
}

export default ComponentListado;