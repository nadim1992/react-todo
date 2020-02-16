import React from 'react';
import TextFormField from './TextFormField';
import SelectFormField from './SelectFormField';
import { getTodaysDate } from '../helpers';

function TodoForm() {

    const options = [
        { id: 'high', name: 'High' },
        { id: 'medium', name: 'Medium' },
        { id: 'low', name: 'Low' }
    ];

    return (
        <div className="column">
            <h2 className="is-size-3 has-text-centered">Add Task</h2>

            <form>
                <TextFormField
                    label="Date"
                    inputType="date"
                    value={getTodaysDate()}
                />

                <TextFormField
                    label="Task name"
                    inputType="text"
                    required={true}
                />

                <SelectFormField
                    label="Select task priority"
                    options={options}
                    value="low"
                />

                <input className="button is-link" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default TodoForm;