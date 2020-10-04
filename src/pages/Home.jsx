import React from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil'
import { codeLanguageState } from '../recoil';

import CodeGroup from '../components/CodeGroup/CodeGroup';
import code from '../data/APIRequests/Home/requests';

const App = () => {
  return (
    <div className="page">
			<header className="header">
				<h1>Introduction!</h1>
				<p>Go to the <Link to="/two">next page</Link></p>
			</header>
			<CodeGroup code={code} />
			<p>The default language is: { useRecoilValue(codeLanguageState) }</p>
    </div>
  );
}

export default App;
