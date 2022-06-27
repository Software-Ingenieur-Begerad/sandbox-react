import React from 'react'
import PropTypes from 'prop-types';

/*controlled component: input form value controlled by React*/
const DropDownSelect = (props) => {
    /*destructuring*/
    const {options,name,onChange,defaultValue}=props;
    if(options){
	return(
	<div>
	    <strong>{name}</strong>:
	    <select
		name={name}
		id={name}
		className={name}
		onChange={onChange}
		defaultValue={defaultValue}
	    >
		{options.map((item, index) => (
		    <option key={index} value={item}>
			{item}
		    </option>
		))}
	    </select>
	</div>
	);
    }else{
	return (
	    <div>
		<p>Select failed.</p>
	    </div>
	);
    }
};

export default DropDownSelect

DropDownSelect.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    options: PropTypes.array,
};
