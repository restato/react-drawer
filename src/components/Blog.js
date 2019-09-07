import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';


class Markdown extends PureComponent {
    render() {

    const input = '# This is a header\n\nAnd this is a paragraph'
        return (
            <ReactMarkdown source={input}>
            </ReactMarkdown>
        );
    }
}