import React from 'react';
import TextFormField from '../form/TextFormField';

function ListFilter(props) {
    return (
        <TextFormField
            handleChange={props.handleSearch}
            inputType="search"
            name="search"
            label="Search Task"
        />
    );
}

export default ListFilter;