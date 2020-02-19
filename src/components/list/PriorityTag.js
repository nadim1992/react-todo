import React from 'react';

function PriorityTag(props) {
    let classes = 'tag';

    switch (props.priority) {
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

export default PriorityTag;