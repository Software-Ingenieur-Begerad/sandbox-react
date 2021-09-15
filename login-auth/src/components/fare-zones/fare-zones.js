import React, { Component } from 'react';
import axios from 'axios';
import FareZonesTable from './fare-zones-table';

export default class FareZones extends Component {
    constructor (props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount () {
        axios.defaults.baseURL = 'https://tarifmatrix.vbn.de:4445';
        axios.defaults.headers.get['Content-Type'] =
      'application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

        axios
            .get('fares/areas/info', {
                // Axios looks for the `auth` option, and, if it is set, formats a
                // basic auth header for you automatically.
                auth: {
                    username: 'admin',
                    password: '34106144-c645-4724-95d4-8512df16ae7e'
                }
            })
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
                                <td>ID</td>
                                <td>Extern</td>
                                <td>Type</td>
                                <td>Intern</td>
                                <td>Name</td>
                                <td>Short Name</td>
                                <td>Valid From</td>
                                <td>Valid To</td>
                            </tr>
                        </thead>
                        <tbody>{this.dataTable()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
