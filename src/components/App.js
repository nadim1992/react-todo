import React, { useState, useEffect } from 'react';

import FormContainer from './form/FormContainer';
import ListContainer from './list/ListContainer';

import {
    getDummyData,
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
    // a task properties
    const defaultsData = {
        id      : 0,
        complete: false,
        date    : getTodaysDate(),
        name    : '',
        priority: '3'
    };

    // states
    const [todo, setTodo]   = useState(defaultsData);
    const [todos, setTodos] = useState([]);
    const [sort, setSort]   = useState('asc');

    // trigger on input change
    const handleChange = (e) => {
        let tempObj = {...todo};
        tempObj[e.target.name] = e.target.value;
        
        setTodo(tempObj);
    };

    // trigger on form submit
    const handleSubmit = (e) => {
        let count = todos.length;
        let tempObj = {...todo};
        
        tempObj['id'] = ++count;

        setTodos([tempObj, ...todos]);

        setTodo(defaultsData); // reset to defaults

        e.preventDefault();
    };

    // mark a task as complete
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

    // edit a task
    const handleEdit = (e) => {
        setTodo(e.target.dataset.todo);
    };

    const handleRemove = (e) => {
        const id = parseInt(e.target.dataset.id);

        setTodos(todos.filter(todo => todo.id !== id));
    };

    // sort on list item header label click
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

    // initialize test data
    useEffect(() => {
        setTodos(getDummyData());
    }, []);

    return (
        <div className="container">
            <div className="columns">
                <FormContainer
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    todo={todo}
                />

                <ListContainer
                    handleComplete={handleComplete}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                    handleSort={handleSort}
                    todos={todos}
                />
            </div>
        </div>
    );
}

export default App;
