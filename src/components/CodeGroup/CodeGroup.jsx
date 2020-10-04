import React from 'react';

import { useRecoilState } from 'recoil'
import { codeLanguageState } from '../../recoil/index'
import CodeSnippet from '../CodeSnippet/CodeSnippet';

import './CodeGroup.scss';

const languageOptions = {
	curl: 'cURL',
	node: 'NodeJS',
	php: 'PHP',
};

const CodeGroup = ({ code }) => {
	const [language, setLanguage] = useRecoilState(codeLanguageState);
	const handleChange = event => setLanguage(event.target.value);

	return (
		<code className="c-code-group">
			<span className="c-dropdown">
				<select name="codeSelect" defaultValue={language} onChange={handleChange}>
					{Object.keys(code).map((lang, index) => (
						<option
							key={index}
							value={lang.toLowerCase()}>{languageOptions[lang]}</option>)
					)}
				</select>
			</span>
			<>
				{Object.keys(code).map((lang, i) => (
					<CodeSnippet
						key={i}
						code={code[lang]}
						className={language === lang ? 'c-snippet c-snippet--is-active' : 'c-snippet'}
						syntax={lang} />
				))}
			</>
		</code>
	);
};

export default CodeGroup;
