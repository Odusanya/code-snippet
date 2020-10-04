import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

// Import popular vscode nightOwl theme
import theme from 'prism-react-renderer/themes/nightOwl';
import './CodeSnippet.scss';


const supportedSyntax = {
	curl: 'bash',
	node: 'js',
	js: 'js',
	ruby: 'rb',
	php: 'php',
};

const Codeblock = ({ code, syntax, className }) => (

	<Highlight {...defaultProps} theme={theme} code={code.trim()} language={supportedSyntax[syntax]}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre className={`c-pre ${className}`}>
				{/* Tokens are equivalent to each row of code  */}
				{tokens.map((line, index) => (
					<div className={'c-line'} key={index} {...getLineProps({ line, key: index })}>
						<span className="c-line-number">{index + 1}</span> {/* Show code line number */}
						<span className="c-line-content">
							{/* Show code snippet for that line */}
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</span>
					</div>
				))}
			</pre>
		)}

	</Highlight>
);

export default Codeblock;
