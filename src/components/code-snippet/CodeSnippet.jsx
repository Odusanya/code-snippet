import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

import './CodeSnippet.scss';

const codeSample = `
const x = x => j;
const x = x => j;
const x = x => j;
const x = x => j;
`.trim();

const CodeSnippet = ({ code = codeSample, syntax, className }) => (
	<Highlight {...defaultProps} theme={theme} code={code.trim()} c language={syntax = 'js'}>
		{({ style, tokens, getLineProps, getTokenProps }) => (
			<pre className={`c-pre ${className}`}>
        {tokens.map((line, i) => (
          <div className={'c-line'} key={i} {...getLineProps({ line, key: i })}>
            <span className="c-line-number">{i + 1}</span>
            <span className="c-line-content">
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

export default CodeSnippet;
