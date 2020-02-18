import React from 'react';
import TextFormField from './TextFormField';

function ListFilter(props) {
    return (
        <TextFormField
            handleChange={props.handleSearch}
            inputType="search"
            name="search"
            label="Search Todo"
        />
    );
}

export default ListFilter;