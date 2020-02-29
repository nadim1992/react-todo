import React from 'react';
import TextFormField from './TextFormField';
import SelectFormField from './SelectFormField';
import { getDefaultsData } from '../../data/Utility';

function FormContainer(props) {
    const priorities = [
        { id: '1', name: 'High' },
        { id: '2', name: 'Medium' },
        { id: '3', name: 'Low' }
    ];

    // trigger on input change
    const handleChange = (e) => {
        let tempObj = { ...props.todo };
        tempObj[e.target.name] = e.target.value;

        props.onUpdateDraft(tempObj);
    };

    // reset the form after submission
    const handleReset = (e) => {
        props.onUpdateDraft(getDefaultsData());
        props.onChangeMode('create');

        e.preventDefault();
    };

    // trigger on form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        props.mode === 'create' ? props.onCreateTodo(props.todo) : props.onEditTodo(props.todo);

        handleReset(e);
    };

    return (
        <div className="column">
            <h2 className="is-size-3 has-text-centered">Add Task</h2>

            <form onSubmit={handleSubmit}>
                <TextFormField
                    handleChange={handleChange}
                    inputType="date"
                    name="date"
                    label="Date"
                    value={props.todo.date}
                />

                <TextFormField
                    handleChange={handleChange}
                    inputType="text"
                    name="name"
                    label="Task name"
                    value={props.todo.name}
                    required={true}
                />

                <SelectFormField
                    handleChange={handleChange}
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
                    onClick={handleReset}
                    type="button"
                    className="button is-danger is-light is-small is-pulled-right"
                >Reset Form</button>
            </form>
        </div>
    );
}

export default FormContainer;