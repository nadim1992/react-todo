import React from 'react';

import FormContainer from './FormContainer';
import ListContainer from './ListContainer';

import 'bulma/css/bulma.css';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="columns">
                <FormContainer />
                <ListContainer />
            </div>
        </div>
    );
}

export default App;
