import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CodeBlock from "../components/CodeBlock"
import ReactMarkdown from 'react-markdown';
  
const initialSource = `
# Live demo

Changes are automatically rendered as you type.

## Table of Contents

  * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
  * Renders actual, "native" React DOM elements
  * Allows you to escape or skip HTML (try toggling the checkboxes above)
  * If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
   
## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?
## Tables?
| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Blogs extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleControlsChange = this.handleControlsChange.bind(this)
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.state = {
      markdownSrc: initialSource,
      htmlMode: 'raw'
    }
  }

  handleMarkdownChange(evt) {
    this.setState({markdownSrc: evt.target.value})
  }

  handleControlsChange(mode) {
    this.setState({htmlMode: mode})
  }
  render() {
    const input = '# This is a header \n\nAnd this is a paragraph\n\n ```python import pandas as pd ```'

    return (
      <div>
        <div className="demo">
          <div className="result-pane">
            <ReactMarkdown
              className="result"
              source={this.state.markdownSrc}
              skipHtml={this.state.htmlMode === 'skip'}
              escapeHtml={this.state.htmlMode === 'escape'}
              renderers={{ code: CodeBlock }}
            />
          </div>
        </div>

        <div>
          <ReactMarkdown source={input}>
          </ReactMarkdown>
          <CodeBlock 
            language="python"
            value="import pandas as pd">
        </CodeBlock>
        <CodeBlock 
            language="java"
            value="import pandas as pd">
        </CodeBlock>
          <Button className={this.props.button}>Default</Button>
          <Button color="primary" className={this.props.button}>
            Primary
          </Button>
          <Button color="secondary" className={this.props.button}>
            Secondary
          </Button>
          <Button disabled className={this.props.button}>
            Disabled
          </Button>
          <Button href="#flat-buttons" className={this.props.button}>
            Link
          </Button>
          <input
            accept="image/*"
            className={this.props.input}
            id="flat-button-file"
            multiple
            type="file"
          />
          <label htmlFor="flat-button-file">
            <Button component="span" className={this.props.button}>
              Upload
            </Button>
          </label>
        </div>

        <br />
      </div>
    );
    }
};

Blogs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Blogs);
