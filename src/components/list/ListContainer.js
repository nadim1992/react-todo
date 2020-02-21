import React, { useState } from 'react';
import ListFilter from './ListFilter';
import ItemRow from './ItemRow';

function ListContainer(props) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="column">
            <h2 className="is-size-3 has-text-centered">Tasks</h2>

            <ListFilter
                handleSearch={handleSearch}
                search={search}
            />

            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr className="has-background-link">
                        <th></th>
                        <th className="has-text-light" data-sort-by="date" onClick={props.handleSort}>Date</th>
                        <th className="has-text-light" data-sort-by="name" onClick={props.handleSort}>Task</th>
                        <th className="has-text-light" data-sort-by="priority" onClick={props.handleSort}>Priority</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map(todo =>
                        todo.name.toLowerCase().includes(search) &&
                        <ItemRow
                            handleComplete={props.handleComplete}
                            handleRemove={props.handleRemove}
                            key={todo.id}
                            todo={todo}
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListContainer;