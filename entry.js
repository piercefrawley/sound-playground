import React from 'react';
import HelloWorld from './index.jsx';

document.addEventListener('DOMContentLoaded', () => {
  React.render(
    <div>
      <h1>Hello World</h1>
      <HelloWorld/>
    </div>
  , document.getElementById('root'));
});