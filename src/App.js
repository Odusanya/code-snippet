import React from 'react';
import { Route, Switch } from 'react-router-dom';
import page1 from './pages/page-1/';
import page2 from './pages/page-2/';

import './App.scss';

function App() {
	return (
		<>
			<Switch>
        <Route exact path='/two' component={ page2 } />
				<Route component={ page1 } />
			</Switch>
		</>
  );
}

export default App;
