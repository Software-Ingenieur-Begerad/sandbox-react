import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FareZonesTable extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.extern}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.intern}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.shortName}</td>
                <td>{this.props.obj.validFrom}</td>
                <td>{this.props.obj.validUnit}</td>
            </tr>
        );
    }
}

FareZonesTable.propTypes = {
    obj: PropTypes.object
};

export default FareZonesTable;
