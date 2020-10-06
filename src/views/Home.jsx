import React from 'react';
import { Link } from 'react-router-dom';

// import code object and codeGroup module here

const App = () => {
  return (
    <div className="page">
			<header className="header">
				<h1>Introduction!</h1>
				<p>Visit our <Link to="/payments">payments</Link> page</p>
			</header>
			<p>Code snippet one</p>
			{/* Add codeGroup module here */}

			<p>Code snippet two</p>
			{/* Add codeGroup module here */}

    </div>
  );
}

export default App;
