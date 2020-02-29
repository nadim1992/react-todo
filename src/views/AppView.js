import React, { useState, useEffect } from 'react';

import FormContainer from './form/FormContainer';
import ListContainer from './list/ListContainer';

// import {
//     getDummyData,
//     getTodaysDate,
//     sortByDateAsc,
//     sortByDateDesc,
//     sortByNameAsc,
//     sortByNameDesc,
//     sortByPriorityAsc,
//     sortByPriorityDesc
// } from '../helpers';

import 'bulma/css/bulma.css';
import './AppView.css';

function AppView(props) {
    // a task properties
    // const defaultsData = {
    //     id      : 0,
    //     complete: false,
    //     date    : getTodaysDate(),
    //     name    : '',
    //     priority: '3'
    // };

    // // states
    // const [mode, setMode]   = useState('create');
    // const [todo, setTodo]   = useState(defaultsData);
    // const [todos, setTodos] = useState([]);
    // const [sort, setSort]   = useState('asc');

    // // create
    // const createTodo = () => {
    //     let count = todos.length;
    //     let tempObj = { ...todo };

    //     tempObj['id'] = ++count;

    //     setTodos([tempObj, ...todos]);
    // };

    // // update
    // const updateTodo = () => {
    //     let tempObj = { ...todo };

    //     setTodos(
    //         todos.map(todo => {
    //             if (todo.id === tempObj.id) {
    //                 todo = tempObj;
    //             }

    //             return todo;
    //         })
    //     );
    // };

    // // trigger on input change
    // const handleChange = (e) => {
    //     let tempObj = { ...todo };
    //     tempObj[e.target.name] = e.target.value;

    //     setTodo(tempObj);
    // };

    // // trigger on form submit
    // const handleSubmit = (e) => {
    //     mode === 'create' ? createTodo() : updateTodo();

    //     handleReset(e);
    // };

    // // mark a task as complete
    // const handleComplete = (e) => {
    //     const id = parseInt(e.target.dataset.id);

    //     setTodos(
    //         todos.map(todo => {
    //             if (todo.id === id) {
    //                 todo.complete = !todo.complete;
    //             }

    //             return todo;
    //         })
    //     );
    // };

    // // edit a task
    // const handleEdit = (e) => {
    //     setTodo(
    //         JSON.parse(e.target.dataset.todo)
    //     );

    //     setMode('update');
    // };

    // const handleRemove = (e) => {
    //     const id = parseInt(e.target.dataset.id);

    //     setTodos(todos.filter(todo => todo.id !== id));
    // };

    // // sort on list item header label click
    // const handleSort = (e) => {
    //     let sortedTodos;

    //     switch (e.target.dataset.sortBy) {
    //         case 'date':
    //             if (sort === 'asc') {
    //                 sortedTodos = sortByDateAsc([...todos]);
    //                 setSort('desc');
    //             } else {
    //                 sortedTodos = sortByDateDesc([...todos]);
    //                 setSort('asc');
    //             }
    //             break;

    //         case 'name':
    //             if (sort === 'asc') {
    //                 sortedTodos = sortByNameAsc([...todos]);
    //                 setSort('desc');
    //             } else {
    //                 sortedTodos = sortByNameDesc([...todos]);
    //                 setSort('asc');
    //             }
    //             break;

    //         case 'priority':
    //             if (sort === 'asc') {
    //                 sortedTodos = sortByPriorityAsc([...todos]);
    //                 setSort('desc');
    //             } else {
    //                 sortedTodos = sortByPriorityDesc([...todos]);
    //                 setSort('asc');
    //             }
    //             break;

    //         default:
    //     }

    //     setTodos(sortedTodos);
    // };

    // const handleReset = (e) => {
    //     setTodo(defaultsData);
    //     setMode('create');

    //     e.preventDefault();
    // };

    // // initialize test data
    // useEffect(() => {
    //     setTodos(getDummyData());
    // }, []);

    return (
        <div className="container">
            <div className="columns">
                <FormContainer {...props} />

                {/* <ListContainer
                    handleComplete={handleComplete}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                    handleSort={handleSort}
                    todos={todos}
                /> */}
            </div>
        </div>
    );
}

export default AppView;
