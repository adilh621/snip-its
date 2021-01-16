import React from 'react';
import Editor from 'react-simple-code-editor';
import dedent from 'dedent';
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
// loadLanguages(['jsx']);

require('prismjs/components/prism-jsx');
 
type State = {
    code: string,
  };

 
class CodeInput extends React.Component {

    state = {
        code: dedent`
        import React from "react";
        import ReactDOM from "react-dom";
        function App() {
          return (
            <h1>Hello world</h1>
          );
        }
        ReactDOM.render(<App />, document.getElementById("root"));
        `,
      };

 
  render() {
    return (
        <Editor
        placeholder="Type some code…"
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        highlight={code => Prism.highlight(code, Prism.languages.jsx, 'jsx')}
        padding={10}
        className="container__editor"
        style={{height: "250px"}}
      />
    );
  }
}

export default CodeInput;