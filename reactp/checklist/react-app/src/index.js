import React from 'react';
import ReactDOM from 'react-dom';
import CheckList from './CheckList';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
const checkboxes = [
    {
      name: 'Javascript',
      key: 'checkBox1',
      label: 'Javascript',
    },
    {
      name: 'React',
      key: 'checkBox2',
      label: 'React',
    },
    {
      name: 'Java',
      key: 'checkBox3',
      label: 'Java',
    },
  
  ];

ReactDOM.render(<CheckList items={checkboxes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
