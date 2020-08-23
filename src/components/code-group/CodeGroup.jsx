import React, { useState } from 'react';
import CodeSnippet from '../code-snippet/CodeSnippet';
import './CodeGroup.scss';


const languageOptions = {
	curl: 'cURL',
	node: 'NodeJS',
	php: 'PHP',
};

// const codeCurl = `
// curl -v -X POST https://api.sandbox.paypal.com/v2/invoicing/generate-next-invoice-number \\
// -H "Content-Type: application/json" \\
// -H "Authorization: Bearer Access-Token"
// `;

// const codeNode = `
// const https = require('https');
// const options = {
// 	hostname: 'api.paystack.co',
// 	path: '/transaction/verify/:reference',
// 	method: 'GET',
// 	headers: {
// 		Authorization: 'Bearer SECRET_KEY'
// 	}
// };
// `;

// const codePHP = `
// $stripe = new \Stripe\StripeClient('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
// $customer = $stripe->customers->create([
// 	'description' => 'example customer',
// 	'email' => 'email@example.com',
// 	'payment_method' => 'pm_card_visa',
// ]);
// echo $customer;
// `;

const supportedSyntax = {
	curl: 'Bash',
	node: 'js',
	ruby: 'rb',
	php: 'php',
};

const CodeGroup = ({ code }) => {
	const options = Object.keys(code);
	const [currentLang, setCurrentLang] = useState(options[0]);
	const handleChange = event => {
		const { target } = event;
		setCurrentLang(target.value);
	};

	return (
		<code className="c-code-group">
			<span className="c-dropdown">
				<select name="codeSelect" defaultValue={currentLang} onChange={handleChange}>
					{Object.keys(code).map((lang, i) => (
						<option
							key={i}
							value={lang.toLowerCase()}>{languageOptions[lang]}</option>
						)
					)}
				</select>
			</span>
			<>
				{/* Refactor this later. Adding this so I can add page snippet transitions with css */}
				{Object.keys(languageOptions).map((lang, i) => (
					<CodeSnippet key={i} code={code[lang]} className={ currentLang === lang.toLowerCase() ? 'c-snippet c-snippet--is-active' : 'c-snippet' } syntax={supportedSyntax[lang]}/>
				))}
			</>
		</code>
	);
};

export default CodeGroup;
