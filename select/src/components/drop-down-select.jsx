import React from 'react'
import PropTypes from 'prop-types';

const DropDownSelect = (props) => {
    if(props.options){
	console.log('options len: '+props.options.length);
	return(
	<div>
	    <strong>{props.name}</strong>:
	    <select
		name="{props.name}"
		onChange={props.onChange}
	    >
		<option defaultValue
		>
		    Select {props.name}
		</option>
		{props.options.map((item, index) => (
		    <option key={index} value={item.id}>
			{item.name}
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
    options: PropTypes.array,
};
