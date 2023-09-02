import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import 'tachyons';

import store from './store/store';


const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();