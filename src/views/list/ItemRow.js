import React from 'react';
import PriorityTag from './PriorityTag';
import DateTag from './DateTag';

function ItemRow(props) {
    // handle complete / incomplete todo
    const handleComplete = (e) => {
        const id = parseInt(e.target.dataset.id);

        props.onToggleCompleteTodo(id);
    };

    // edit a todo
    const handleEdit = (e) => {
        props.onUpdateDraft(JSON.parse(e.target.dataset.todo));

        props.onChangeMode('update');
    };

    // delete a todo
    const handleRemove = (e) => {
        const id = parseInt(e.target.dataset.id);

        props.onRemoveTodo(id);
    };

    return (
        <tr>
            <td>
                <input
                    onChange={handleComplete}
                    data-id={props.item.id}
                    checked={props.item.complete}
                    type="checkbox"
                />
            </td>
            <td><DateTag date={props.item.date} /></td>
            <td>{props.item.name}</td>
            <td><PriorityTag priority={props.item.priority} /></td>
            <td>
                <span
                    onClick={handleEdit}
                    data-todo={JSON.stringify(props.item)}
                    role="img"
                    className="has-text-info"
                    aria-label="Edit"
                >&#9998;</span>

                <span
                    onClick={handleRemove}
                    data-id={props.item.id}
                    role="img"
                    className="is-pulled-right"
                    aria-label="Remove"
                >&#10060;</span>
            </td>
        </tr>
    );
}

export default ItemRow;