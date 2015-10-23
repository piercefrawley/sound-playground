import React from 'react';
import { Grid, Row, Col, Nav }  from 'react-bootstrap';

const App = React.createClass({

  getDefaultProps(){
    return {
      text: 'Hello World'
    }
  },

  render(){

    const {
      text,
    } = this.props;

    return(
      <div>{text}</div>
    )
  }
});

function HelloWorld(node, props = {}) {
  React.render(React.createElement(App, props), node);
}

export default HelloWorld;