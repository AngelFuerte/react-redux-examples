import {combineReducers} from 'redux';
import superheroesReducers from './superheroesReducers'
import tabBarReducer from './tabBarReducer'
import dataReducer from './dataReducer'
import { reducer as formReducer } from 'redux-form'
  
  
export default combineReducers  ({
    superheroes: superheroesReducers,
    tabId: tabBarReducer,
    dataReducer,
    form: formReducer
})

