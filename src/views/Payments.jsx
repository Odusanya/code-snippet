import React from 'react';
import { Link } from 'react-router-dom';

/* Instruction */
// Remove undo the code comments below at the end of the tutorial

// import CodeGroup from '../components/CodeGroup/CodeGroup';
// import code from '../utils/PaymentsRequests';


const Payments = () => {
  return (
    <div className="page">
      <header className="header">
				<h1>Payments!</h1>
				<p>Go back <Link to="/">home</Link></p>
			</header>
			{/* <CodeGroup code={code}/> */}
    </div>
  );
}

export default Payments;
