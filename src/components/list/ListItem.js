import React from 'react';
import PriorityTag from './PriorityTag';
import DateTag from './DateTag';

function ListItem(props) {
    return (
        <li className="list-item">
            <label className="checkbox">
                <input
                    onChange={props.handleComplete}
                    data-id={props.todo.id}
                    checked={props.todo.complete}
                    type="checkbox"
                /> <DateTag date={props.todo.date} /> {props.todo.name}
            </label> <PriorityTag priority={props.todo.priority} />

            <span
                onClick={props.handleRemove}
                data-id={props.todo.id}
                role="button"
                className="is-pulled-right"
            >&#10060;</span>
        </li>
    );
}

export default ListItem;