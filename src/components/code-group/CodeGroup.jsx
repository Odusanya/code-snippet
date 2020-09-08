import React, { useState } from 'react';
import CodeSnippet from '../code-snippet/CodeSnippet';
import './CodeGroup.scss';


const languageOptions = {
	curl: 'cURL',
	node: 'NodeJS',
	php: 'PHP',
};

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
