import React from 'react';

function DateTag(props) {
    return (
        <span className="tag">
            {props.date}
        </span>
    );
}

function PriorityTag(props) {
    let classes = 'tag is-pulled-right';

    switch ( props.priority ) {
        case 'low':
            classes += ' has-background-success has-text-white ';
            break;
        
        case 'medium':
            classes += ' has-background-warning has-text-dark ';
            break;

        case 'high':
            classes += ' has-background-danger has-text-white ';
            break;

        default:
    }

    return (
        <span className={classes}>
            {props.priority}
        </span>
    );
}

function ListContainer(props) {
    return (
        <div className="column">
            <h2 className="is-size-3 has-text-centered">Tasks</h2>

            <ul className="list">
                {props.todos.map(todo =>
                    <li className="list-item" key={todo.id}>
                        {todo.name} <DateTag date={todo.date} />
                        <PriorityTag priority={todo.priority} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ListContainer;