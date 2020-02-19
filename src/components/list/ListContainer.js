import React, { useState } from 'react';
import ListFilter from './ListFilter';
import ListItem from './ListItem';

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

            <ul className="list">
                {props.todos.map(todo =>
                    todo.name.includes(search) &&
                    <ListItem
                        handleComplete={props.handleComplete}
                        handleRemove={props.handleRemove}
                        key={todo.id}
                        todo={todo}
                    />
                )}
            </ul>
        </div>
    );
}

export default ListContainer;