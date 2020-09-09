import React from 'react';
import { Link } from 'react-router-dom';

import CodeGroup from '../../components/CodeGroup/CodeGroup';
import code from '../../requests/page-2/requests';

const page2 = () => {
  return (
    <div className="page">
      <header className="header">
				<h1>Page Two!</h1>
				<p>Go back <Link to="/">home</Link></p>
			</header>
			<CodeGroup code={code}/>
    </div>
  );
}

export default page2;
