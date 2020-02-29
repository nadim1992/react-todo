import React, { useState, useEffect } from 'react';
import TextFormField from '../form/TextFormField';
import ProgressBar from './ProgressBar';
import ItemRow from './ItemRow';
import {
    getDummyData,
    sortByDateAsc,
    sortByDateDesc,
    sortByNameAsc,
    sortByNameDesc,
    sortByPriorityAsc,
    sortByPriorityDesc
} from '../../data/Utility';

function ListContainer(props) {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('asc');

    // search todos by name
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // sort on list item header label click
    const handleSort = (e) => {
        let sortedTodos;

        switch (e.target.dataset.sortBy) {
            case 'date':
                if (sort === 'asc') {
                    sortedTodos = sortByDateAsc(props.todos);
                    setSort('desc');
                } else {
                    sortedTodos = sortByDateDesc(props.todos);
                    setSort('asc');
                }
                break;

            case 'name':
                if (sort === 'asc') {
                    sortedTodos = sortByNameAsc(props.todos);
                    setSort('desc');
                } else {
                    sortedTodos = sortByNameDesc(props.todos);
                    setSort('asc');
                }
                break;

            case 'priority':
                if (sort === 'asc') {
                    sortedTodos = sortByPriorityAsc(props.todos);
                    setSort('desc');
                } else {
                    sortedTodos = sortByPriorityDesc(props.todos);
                    setSort('asc');
                }
                break;

            default:
        }

        props.onSortTodos(sortedTodos);
    };

    // initialize list test data
    useEffect(() => {
        getDummyData().forEach(data => {
            props.onDummyData(data);
        });
    }, []);

    return (
        <div className="column">
            <h2 className="is-size-3 has-text-centered">Tasks</h2>

            <TextFormField
                handleChange={handleSearch}
                inputType="search"
                name="search"
                label="Search Task"
            />

            <ProgressBar todos={props.todos} />

            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr className="has-background-link">
                        <th></th>
                        <th className="has-text-light" data-sort-by="date" onClick={handleSort}>Date</th>
                        <th className="has-text-light" data-sort-by="name" onClick={handleSort}>Task</th>
                        <th className="has-text-light" data-sort-by="priority" onClick={handleSort}>Priority</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {[...props.todos.values()].reverse().map(item =>
                        item.name.toLowerCase().includes(search) &&
                        <ItemRow
                            key={item.id}
                            item={item}
                            {...props}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListContainer;