import React, { Component } from 'react';
import axios from 'axios';
import FareZonesTable from './fare-zones-table';

export default class FareZones extends Component {
    constructor (props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount () {
        axios.defaults.baseURL = 'https://data.vbn.de';
        axios.defaults.headers.get['Content-Type'] =
      'application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

        axios
            .get('/data/stops')
            .then((res) => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    dataTable () {
        return this.state.usersCollection.map((data, i) => {
            return <FareZonesTable obj={data} key={i} />;
        });
    }

    render () {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>id</td>
                                <td>active</td>
                                <td>lon</td>
                                <td>lat</td>
                                <td>stop_long_name</td>
                                <td>stop_name</td>
                                <td>stop_name_extern</td>
                                <td>fare_zone_1</td>
                                <td>fare_zone_2</td>
                                <td>fare_zone_3</td>
                                <td>fare_zone_4</td>
                                <td>valid_from</td>
                                <td>valid_until</td>
                                <td>last_modified</td>
                            </tr>
                        </thead>
                        <tbody>{this.dataTable()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
