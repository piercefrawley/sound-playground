import React from 'react';

export default class HelloWorld extends React.Component {
 render() { 
  return <div onClick={this._handleClick}>Hello, world.</div>;
 }
 _handleClick() {
  console.log(this); 
 }
}