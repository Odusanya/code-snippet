import React, { useEffect, useRef } from 'react';

import { useRecoilState } from 'recoil'
import { codeLanguageState } from '../../store/index'
import CodeSnippet from '../CodeSnippet/CodeSnippet';

import './CodeGroup.scss';

const languageOptions = {
	curl: 'cURL',
	node: 'NodeJS',
	php: 'PHP',
};

const CodeGroup = ({ code }) => {
	const select = useRef();
	const [language, setLanguage] = useRecoilState(codeLanguageState);
	const handleChange = event => setLanguage(event.target.value);

	useEffect(() => {
		select.current.value = language;
	}, [language]);

	return (
		<code className="c-code-group">
			<span className="c-dropdown">
				<select
					ref={select}
					name="codeSelect"
					defaultValue={language}
					onChange={handleChange}>
					{Object.keys(code).map((lang, index) => (
						<option
							key={index}
							value={lang.toLowerCase()}>{languageOptions[lang]}</option>)
					)}
				</select>
			</span>
			<>
				{Object.keys(code).map((lang, index) => (
					<CodeSnippet
						key={index}
						code={code[lang]}
						className={language === lang ? 'c-snippet c-snippet--is-active' : 'c-snippet'}
						syntax={lang} />
				))}
			</>
		</code>
	);
};

export default CodeGroup;
