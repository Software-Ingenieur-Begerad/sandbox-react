import React from 'react';
import PropTypes from 'prop-types';

//destructure props
const Hello = ({msg}) => {
    return (
	<>
	    <div>{msg}</div>
	</>
    );
}

export default Hello

Hello.propTypes = {
    msg: PropTypes.string,
};
