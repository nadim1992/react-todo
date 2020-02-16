import React from 'react';

function TextFormField(props) {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.inputType} value={props.value} required={props.required} />
            </div>
        </div>
    );
}

export default TextFormField;