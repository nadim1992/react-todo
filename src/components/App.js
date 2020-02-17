import React, { useState, useEffect } from 'react';

import FormContainer from './FormContainer';
import ListContainer from './ListContainer';

import { getTodaysDate } from '../helpers';

import 'bulma/css/bulma.css';
import './App.css';

function App() {
    const [todos, setTodos] = useState([{
        id:0,name:'',date:'',priority:'low'
    }]);
    const [date, setDate] = useState(getTodaysDate());
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('low');

    const handleChange = (e) => {
        switch ( e.target.name ) {
            case 'date':
                setDate(e.target.value);
            break;

            case 'name':
                setName(e.target.value);
            break;

            case 'priority':                
                setPriority(e.target.value);
            break;

            default:
        }
    };

    const handleSubmit = (e) => {
        let count = todos.length;

        setTodos([
            { id: ++count, date, name, priority },
            ...todos
        ]);

        resetForm();

        e.preventDefault();
    };

    const resetForm = () => {
        setDate(getTodaysDate());
        setName('');
        setPriority('low');
    };

    // Initialize test data
    useEffect(() => {
        setTodos([
            { id: 1, date: '2018-11-02', name: 'Go to store', priority: 'low' },
            { id: 2, date: '2018-11-04', name: 'Buy some food', priority: 'high' },
            { id: 3, date: '2018-11-05', name: 'Go to school', priority: 'low' },
            { id: 4, date: '2018-11-07', name: 'Call Mr. John', priority: 'low' },
            { id: 5, date: '2018-11-12', name: 'Go something fun', priority: 'medium' },
            { id: 6, date: '2018-11-23', name: 'Come back home', priority: 'low' },
            { id: 7, date: '2019-11-23', name: 'Watch movie', priority: 'medium' },
            { id: 8, date: '2018-11-27', name: 'Go to bed', priority: 'low' }
        ]);
    }, []);

    return (
        <div className="container">
            <div className="columns">
                <FormContainer
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    date={date}
                    name={name}
                    priority={priority}
                />

                <ListContainer
                    todos={todos}
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
}

export default App;
