import React from 'react';
import { Link } from 'react-router-dom';

import CodeGroup from './../../components/code-group/CodeGroup';
import code from '../../requests/page-1/requests';

const App = () => {
  return (
    <div className="App">
			<header className="App-header">
				<h1>Introduction!</h1>
				<p>Visit the <Link to="/two">next page</Link></p>
			</header>
			<CodeGroup code={code}/>
    </div>
  );
}

export default App;
