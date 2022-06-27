import React from 'react';
import PropTypes from 'prop-types';

/*destructure props object*/
const TableEntry = ({ shape_id, shape_pt_lat, shape_pt_lon, shape_pt_sequence }) => {
    return (
        <tr>
            <td>{shape_id}</td>
            <td>{shape_pt_lat}</td>
            <td>{shape_pt_lon}</td>
            <td>{shape_pt_sequence}</td>
        </tr>
    );
};

TableEntry.propTypes = {
    shape_id: PropTypes.string,
    shape_pt_lat: PropTypes.number,
    shape_pt_lon: PropTypes.number,
    shape_pt_sequence: PropTypes.number
};

export default TableEntry;
