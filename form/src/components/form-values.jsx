import React from 'react';
import PropTypes from 'prop-types';

/*controlled component: input form value controlled by React*/
const FormValues = (props) => {
    /*destructuring*/
    const { value1, value1Name, value1Label, value2, value2Name, value2Label, onChange, onSubmit } = props;

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>{value1Label}</label>
                <input type="text" name={value1Name} value={value1} onChange={onChange} />
		<br/>
                <label>{value2Label}</label>
                <input type="text" name={value2Name} value={value2} onChange={onChange} />
		<input type="submit" value="Submit" />
            </form>
        </>
    );
};
export default FormValues;

FormValues.propTypes = {
    value1: PropTypes.string,
    value1Name: PropTypes.string,
    value1Label: PropTypes.string,
    value2: PropTypes.string,
    value2Name: PropTypes.string,
    value2Label: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
};
