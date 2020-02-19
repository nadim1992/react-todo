import React, { useState } from 'react';
import ListFilter from './ListFilter';
import ItemRow from './ItemRow';

function ListContainer(props) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="column is-three-fifths">
            <h2 className="is-size-3 has-text-centered">Tasks</h2>

            <ListFilter
                handleSearch={handleSearch}
                search={search}
            />

            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr className="has-background-link">
                        <th></th>
                        <th className="has-text-light">Date</th>
                        <th className="has-text-light">Task</th>
                        <th className="has-text-light">Priority</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map(todo =>
                        todo.name.includes(search) &&
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