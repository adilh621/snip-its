import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import Card from "react-bootstrap/Card"

class Snipitview extends React.Component {

    render(title, body, username, category) {
        console.log(title);
    return(<Card>
        <Card.Header><h1>{title}</h1></Card.Header>
        <Editor 
        value={body}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12}} 
        />
        <Card.body><h2>{username}</h2></Card.body>
        <Card.body><h2>{category}</h2></Card.body>
         </Card>)
    }
}

export default Snipitview;