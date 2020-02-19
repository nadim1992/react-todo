import React, { useState, useEffect } from 'react';

import FormContainer from './form/FormContainer';
import ListContainer from './list/ListContainer';

import { getTodaysDate } from '../helpers';

import 'bulma/css/bulma.css';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState(getTodaysDate());
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('low');

    const handleChange = (e) => {
        switch (e.target.name) {
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
            { id: ++count, complete: false, date, name, priority },
            ...todos
        ]);

        resetForm();

        e.preventDefault();
    };

    const handleComplete = (e) => {
        const id = parseInt(e.target.dataset.id);

        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.complete = !todo.complete;
                }

                return todo;
            })
        );
    };

    const handleRemove = (e) => {
        const id = parseInt(e.target.dataset.id);

        setTodos(todos.filter(todo => todo.id !== id));
    };

    const resetForm = () => {
        setDate(getTodaysDate());
        setName('');
        setPriority('low');
    };

    // Initialize test data
    useEffect(() => {
        setTodos([
            { id: 1, complete: false, date: '2018-11-02', name: 'Go to store', priority: 'low' },
            { id: 2, complete: false, date: '2018-11-04', name: 'Buy some food', priority: 'high' },
            { id: 3, complete: false, date: '2018-11-05', name: 'Go to school', priority: 'low' },
            { id: 4, complete: true, date: '2018-11-07', name: 'Call Mr. John', priority: 'low' },
            { id: 5, complete: false, date: '2018-11-12', name: 'Do something fun', priority: 'medium' },
            { id: 6, complete: true, date: '2018-11-23', name: 'Come back home', priority: 'low' },
            { id: 7, complete: true, date: '2019-11-23', name: 'Watch movie', priority: 'medium' },
            { id: 8, complete: false, date: '2018-11-27', name: 'Go to bed', priority: 'low' }
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
                    handleComplete={handleComplete}
                    handleRemove={handleRemove}
                    todos={todos}
                />
            </div>
        </div>
    );
}

export default App;
