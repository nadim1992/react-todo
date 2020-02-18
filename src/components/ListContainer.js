import React, { useState } from 'react';
import ListFilter from './ListFilter';
import PriorityTag from './PriorityTag';
import DateTag from './DateTag';

function ListItem(props) {
    return (
        <li className="list-item">
            <label class="checkbox">
                <input
                    checked={props.todo.complete}
                    type="checkbox"
                /> {props.todo.name} <DateTag date={props.todo.date} />
            </label>

            <PriorityTag priority={props.todo.priority} />
        </li>
    );
}

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
                        <ListItem key={todo.id} todo={todo} />
                )}
            </ul>
        </div>
    );
}

export default ListContainer;