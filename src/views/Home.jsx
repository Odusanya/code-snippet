import React from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil'
import { codeLanguageState } from '../store';

import CodeGroup from '../components/CodeGroup/CodeGroup';
import code from '../utils/HomeRequests';

const App = () => {
  return (
    <div className="page">
			<header className="header">
				<h1>Introduction!</h1>
				<p>Visit our <Link to="/payments">payments</Link> page</p>
			</header>
			<p>Code snippet one</p>
			<CodeGroup code={code} />
			<p>The default language is: { useRecoilValue(codeLanguageState) }</p>
			<p>Code snippet two</p>
			<CodeGroup code={code} />
    </div>
  );
}

export default App;
