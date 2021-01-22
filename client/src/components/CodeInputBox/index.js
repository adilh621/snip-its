import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { set } from 'mongoose';

const code = ``;
 
class CodeInputBox extends React.Component {
  state = { code };
  
 
  render() {
    
    const setCode = this.props.setCode;
    setCode(this.state.code);

    return (
      <Editor
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12, height: "200px",
        }}
      />
    );
  }
}
export default CodeInputBox;

