import React, { Component } from 'react';
import axios from 'axios';
import Table from './table';

export default class Vehicles extends Component {
    constructor (props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount () {
        axios.defaults.baseURL = 'http://192.168.22.16:42001';
        axios.defaults.headers.get['Content-Type'] =
      'application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

        axios
            .get('/', {})
            .then((res) => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    dataTable () {
        return this.state.usersCollection.map((data, i) => {
            return <Table obj={data} key={i} />;
        });
    }

    render () {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>uuid</td>
                                <td>lat</td>
                                <td>lon</td>
                                <td>ts</td>
                                <td>alias</td>
                                <td>vehicle</td>
                                <td>label</td>
                                <td>licensePlate</td>
                                <td>tripId</td>
                                <td>routeId</td>
                                <td>directionId</td>
                                <td>startTime</td>
                                <td>startDate</td>
                            </tr>
                        </thead>
                        <tbody>{this.dataTable()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
