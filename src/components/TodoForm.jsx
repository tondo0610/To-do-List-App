import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
TodoForm.propTypes = {
    onSubmit: PropTypes.func
};
TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');
    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setValue('');
        if (!onSubmit) return;
        if (!value) return;

        onSubmit(value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
            <button type='submit'><BsPlusLg /></button>
        </form>
    );
}

export default TodoForm;