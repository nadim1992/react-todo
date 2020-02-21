import React, { useState, useEffect } from 'react';

import FormContainer from './form/FormContainer';
import ListContainer from './list/ListContainer';

import {
    getTodaysDate,
    sortByDateAsc,
    sortByDateDesc,
    sortByNameAsc,
    sortByNameDesc,
    sortByPriorityAsc,
    sortByPriorityDesc
} from '../helpers';

import 'bulma/css/bulma.css';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState(getTodaysDate());
    const [name, setName] = useState('');
    const [priority, setPriority] = useState('3');
    const [sort, setSort] = useState('asc');

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

    const handleSort = (e) => {
        let sortedTodos;

        switch (e.target.dataset.sortBy) {
            case 'date':
                if (sort === 'asc') {
                    sortedTodos = sortByDateAsc([...todos]);
                    setSort('desc');
                } else {
                    sortedTodos = sortByDateDesc([...todos]);
                    setSort('asc');
                }
                break;

            case 'name':
                if (sort === 'asc') {
                    sortedTodos = sortByNameAsc([...todos]);
                    setSort('desc');
                } else {
                    sortedTodos = sortByNameDesc([...todos]);
                    setSort('asc');
                }
                break;

            case 'priority':
                if (sort === 'asc') {
                    sortedTodos = sortByPriorityAsc([...todos]);
                    setSort('desc');
                } else {
                    sortedTodos = sortByPriorityDesc([...todos]);
                    setSort('asc');
                }
                break;

            default:
        }

        setTodos(sortedTodos);
    };

    const resetForm = () => {
        setDate(getTodaysDate());
        setName('');
        setPriority('3');
    };

    // Initialize test data
    useEffect(() => {
        setTodos([
            { id: 1, complete: false, date: '2018-11-02', name: 'Go to store', priority: '3' },
            { id: 2, complete: false, date: '2018-09-04', name: 'Buy some food', priority: '1' },
            { id: 3, complete: false, date: '2018-11-05', name: 'Go to school', priority: '2' },
            { id: 4, complete: true, date: '2019-01-07', name: 'Call Mr. John', priority: '3' },
            { id: 5, complete: false, date: '2018-11-12', name: 'Do something fun', priority: '3' },
            { id: 6, complete: true, date: '2018-07-23', name: 'Come back home', priority: '1' },
            { id: 7, complete: true, date: '2019-11-23', name: 'Watch movie', priority: '2' },
            { id: 8, complete: false, date: '2018-09-27', name: 'Go to bed', priority: '3' }
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
                    handleSort={handleSort}
                    todos={todos}
                />
            </div>
        </div>
    );
}

export default App;
