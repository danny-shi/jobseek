import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from '../app/App';
import { BrowserRouter as Router, Route } from "react-router-dom";

describe(`App`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Route>
                    <App />
                </Route>
            </Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
