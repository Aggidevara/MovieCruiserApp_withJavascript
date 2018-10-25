import React from 'react';
import ReactDOM from 'react-dom';
import CartoonsList from './CartoonsList';
// import './List.css';
// import './list.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
const cartoons=[
    {
        id:0,
        name:'Tom',
        creator:'walt Disney',
        display:true
    },
    {
        id:1,
        name:'Jerry',
        creator:'walt Disney',
         display:true
    }
]
// ReactDOM.render(<h3>hello </h3>, document.getElementById('root'));
ReactDOM.render(<CartoonsList items={cartoons}/>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
