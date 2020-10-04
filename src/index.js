import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import recoilPersist from 'recoil-persist';

import './index.css';
import App from './App';
const { RecoilPersist, updateState } = recoilPersist();



ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot initializeState={updateState}>
				<RecoilPersist />
				<App />
			</RecoilRoot>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
