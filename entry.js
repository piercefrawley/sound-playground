import React from 'react';
import HelloWorld from './index.jsx';

document.addEventListener('DOMContentLoaded', () => {
  React.render(
    <div>
      <HelloWorld/>
    </div>
  , document.getElementById('root'));
});