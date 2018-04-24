//Dependencies
import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      select: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "nombre") {
      this.setState({nombre: event.target.value});  
    }else if (event.target.id === "descripcion") {
      this.setState({descripcion: event.target.value.toUpperCase()});
    }else if (event.target.id === "select") {
      this.setState({select: event.target.value});
    }    
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.nombre + "  Descripcion es: " + this.state.descripcion + " Has seleccionado: " + this.state.select);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br/><label>
          Name:
          <input type="text" id="nombre" value={this.state.nombre} onChange={this.handleChange} />
        </label>
        <br/><br/>
        <label>
          Descripcion:
          <textarea type="text" id="descripcion" value={this.state.descripcion} onChange={this.handleChange} />
        </label>
        <br/><br/>
        <label>
          Pick your favorite La Croix flavor:
          <select id="select" value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;