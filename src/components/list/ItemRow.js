import React from 'react';
import PriorityTag from './PriorityTag';
import DateTag from './DateTag';

function ItemRow(props) {
    return (
        <tr>
            <td>
                <input
                    onChange={props.handleComplete}
                    data-id={props.todo.id}
                    checked={props.todo.complete}
                    type="checkbox"
                />
            </td>
            <td><DateTag date={props.todo.date} /></td>
            <td>{props.todo.name}</td>
            <td><PriorityTag priority={props.todo.priority} /></td>
            <td>
                <span
                    onClick={props.handleEdit}
                    data-todo={props.todo}
                    role="img"
                    className="has-text-info"
                    aria-label="Edit"
                >&#9998;</span>

                <span
                    onClick={props.handleRemove}
                    data-id={props.todo.id}
                    role="img"
                    className="is-pulled-right"
                    aria-label="Remove"
                >&#10060;</span>
            </td>
        </tr>
    );
}

export default ItemRow;