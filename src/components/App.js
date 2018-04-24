// Dependencies

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

// Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import configureStore from '../configureStore'


// Data 
import items from '../data/menu';

//Style




let store = configureStore()

class App extends Component {
  static propTypes = {
  	children: PropTypes.object.isRequired
  }
  render() {
  	const { children } = this.props;
    return (
      <Provider store = {store}>  
        <div className="App">
           <Header title = "Deipi" items={items} />
           <Content body = {children}/>
           <Footer copyright = "&copy; Deipi 2018"/>
        </div>
      </Provider>
    );
  }
}

export default App;
