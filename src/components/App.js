import React from 'react';
import { Provider } from 'react-redux';
import Posts from './Posts';
import store from '../store';

export default function App(){
    return(
        <div className="container">
            <Provider store={store}>
                <Posts />
            </Provider>
        </div>
    )
}

