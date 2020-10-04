import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Payments from './views/Payments';

import './App.scss';

function App() {
	return (
		<Switch>
			<Route exact path='/payments' component={Payments} />
			<Route component={Home} />
		</Switch>
	);
}

export default App;
