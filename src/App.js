import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Page2 from './views/page-2';

import './App.scss';

function App() {
	return (
		<Switch>
			<Route exact path='/two' component={Page2} />
			<Route component={Home} />
		</Switch>
	);
}

export default App;
