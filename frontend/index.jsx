import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'
import Root from './components/root';


document.addEventListener('DOMContentLoaded', ()=> {
    const store = configureStore();
    const root = document.getElementById('root');

    //TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING END 
    ReactDOM.render(<Root store={store} />, root);
})