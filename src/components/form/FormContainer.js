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
                    value={props.todo.date}
                />

                <TextFormField
                    handleChange={props.handleChange}
                    inputType="text"
                    name="name"
                    label="Task name"
                    value={props.todo.name}
                    required={true}
                />

                <SelectFormField
                    handleChange={props.handleChange}
                    name="priority"
                    label="Select task priority"
                    options={priorities}
                    value={props.todo.priority}
                />

                <input
                    className="button is-link"
                    type="submit"
                    value={props.mode === 'create' ? 'Save' : 'Save Changes'}
                />

                <button
                    onClick={props.handleReset}
                    type="button"
                    className="button is-danger is-light is-small is-pulled-right"
                >Reset Form</button>
            </form>
        </div>
    );
}

export default FormContainer;