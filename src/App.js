import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import home from './pages/Home';
import page2 from './pages/page-2/';

import './App.scss';

function App() {
	return (
		<RecoilRoot>
			<Switch>
				<Route exact path='/two' component={ page2 } />
				<Route component={ home } />
			</Switch>
		</RecoilRoot>
  );
}

export default App;
