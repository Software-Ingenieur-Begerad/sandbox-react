import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FareZonesTable extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.active ? 'true' : 'false'}</td>
                <td>{this.props.obj.lon}</td>
                <td>{this.props.obj.lat}</td>
                <td>{this.props.obj.stop_long_name}</td>
                <td>{this.props.obj.stop_name}</td>
                <td>{this.props.obj.stop_name_extern}</td>
                <td>{this.props.obj.fare_zone_1}</td>
                <td>
                    {this.props.obj.fare_zone_2 ? this.props.obj.fare_zone_2 : 'null'}
                </td>
                <td>
                    {this.props.obj.fare_zone_3 ? this.props.obj.fare_zone_3 : 'null'}
                </td>
                <td>
                    {this.props.obj.fare_zone_4 ? this.props.obj.fare_zone_4 : 'null'}
                </td>
                <td>{this.props.obj.valid_from}</td>
                <td>
                    {this.props.obj.valid_until ? this.props.obj.valid_until : 'null'}
                </td>
                <td>{this.props.obj.last_modified}</td>
            </tr>
        );
    }
}

FareZonesTable.propTypes = {
    obj: PropTypes.object
};

export default FareZonesTable;
