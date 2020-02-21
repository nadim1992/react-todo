import React from 'react';

function PriorityTag(props) {
    let classes = 'tag';

    switch (props.priority) {
        case '3':
            classes += ' has-background-success has-text-white ';
            break;

        case '2':
            classes += ' has-background-warning has-text-dark ';
            break;

        case '1':
            classes += ' has-background-danger has-text-white ';
            break;

        default:
    }

    const getTagName = (priority) => {
        let tag;

        switch (priority) {
            case '1':
                tag = 'High';
            break;

            case '2':
                tag = 'Medium';
            break;

            case '3':
                tag = 'Low';
            break;

            default:
        }

        return tag;
    };

    return (
        <span className={classes}>
            {getTagName(props.priority)}
        </span>
    );
}

export default PriorityTag;