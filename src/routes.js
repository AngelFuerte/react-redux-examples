//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './components/App';
import ListAddOption from './components/ListAddOption/ListAddOption';
import FormOptions from './components/FormOptions/FormOptions';
import ContAndCalc from './components/ContAndCalc/ContAndCalc';
import PetitionJson from './components/PetitionJson/superheroesList';
import PetitionApi from './components/PetitionApi/superheroesList';
import TabBarList from './components/TabBarList/TabBarList';
import SubmitValidationForm from './components/ReduxForm/SubmitValidationForm';
import TaskCompleted from './components/TaskCompleted/TaskCompleted';
import Page404 from './components/Page404';

const AppRoutes = () =>  
	<App>
		<Switch>
			<Route exact path="/ListAddOption" component={ListAddOption} />
			<Route exact path="/FormOptions" component={FormOptions} />
			<Route exact path="/" component={ContAndCalc} />
			<Route exact path="/PetitionJson" component={PetitionJson} />
			<Route exact path="/PetitionApi" component={PetitionApi} />
			<Route exact path="/TabBarList" component={TabBarList} />
			<Route exact path="/TaskCompleted" component={TaskCompleted} />
			<Route exact path="/ReduxForm" component={SubmitValidationForm} />
			<Route component= {Page404} /> 
		</Switch>
	</App>

export default AppRoutes;