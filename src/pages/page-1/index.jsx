import React from 'react';
import { Link } from 'react-router-dom';

import CodeGroup from './../../components/code-group/CodeGroup';
import code from '../../requests/page-1/requests';

const App = () => {
  return (
    <div className="page">
			<header className="header">
				<h1>Introduction!</h1>
				<p>Go to the <Link to="/two">next page</Link></p>
			</header>
			<CodeGroup code={code}/>
    </div>
  );
}

export default App;
