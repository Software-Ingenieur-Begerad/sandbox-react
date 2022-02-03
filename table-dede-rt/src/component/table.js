import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.obj.uuid}</td>
                <td>{this.props.obj.lat}</td>
                <td>{this.props.obj.lon}</td>
                <td>{this.props.obj.ts}</td>
                <td>{this.props.obj.alias}</td>
                <td>{this.props.obj.vehicle}</td>
                <td>{this.props.obj.lable}</td>
                <td>{this.props.obj.licensePlate}</td>
                <td>{this.props.obj.tripId}</td>
                <td>{this.props.obj.routeId}</td>
                <td>{this.props.obj.directionId}</td>
                <td>{this.props.obj.startTime}</td>
                <td>{this.props.obj.startDate}</td>
            </tr>
        );
    }
}

Table.propTypes = {
    obj: PropTypes.object
};

export default Table;
