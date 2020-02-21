import React from 'react';
import TextFormField from './TextFormField';
import SelectFormField from './SelectFormField';

function FormContainer(props) {
    const priorities = [
        { id: '1', name: 'High' },
        { id: '2', name: 'Medium' },
        { id: '3', name: 'Low' }
    ];

    return (
        <div className="column">
            <h2 className="is-size-3 has-text-centered">Add Task</h2>

            <form onSubmit={props.handleSubmit}>
                <TextFormField
                    handleChange={props.handleChange}
                    inputType="date"
                    name="date"
                    label="Date"
                    value={props.date}
                />

                <TextFormField
                    handleChange={props.handleChange}
                    inputType="text"
                    name="name"
                    label="Task name"
                    value={props.name}
                    required={true}
                />

                <SelectFormField
                    handleChange={props.handleChange}
                    name="priority"
                    label="Select task priority"
                    options={priorities}
                    value={props.priority}
                />

                <input
                    className="button is-link"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default FormContainer;