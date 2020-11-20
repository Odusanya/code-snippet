import React from 'react';
import { Link } from 'react-router-dom';

import CodeGroup from '../components/CodeGroup/CodeGroup';
import code from '../utils/PaymentRequests';

const Payments = () => {
  return (
    <div className="page">
      <header className="header">
				<h1>Payments!</h1>
				<p>Go back <Link to="/">home</Link></p>
			</header>
			<CodeGroup code={code}/>
    </div>
  );
}

export default Payments;
