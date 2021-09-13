import React from 'react';
import './style/main.less';
import axios from 'axios';

function axiosGet () {
    console.log('axiosGet() started...');

    //send HTTP GET via axios
    const Usr = 'tbd';
    const Key = 'tbd';

    //axios.defaults.baseURL = 'https://test-tarifmatrix.vbn.de:4245';
    axios.defaults.baseURL = 'https://tarifmatrix.vbn.de:4445';
    axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

    axios
        .get('fares/areas/info', {
            // Axios looks for the `auth` option, and, if it is set, formats a
            // basic auth header for you automatically.
            auth: {
                username: `${Usr}`,
                password: `${Key}`
            }
        })
    //handle rsp in async manner
        .then((response) => {
            if (response.data) {
                console.log('axiosGet() response.data: ', response.data);
            } else {
                console.log('axiosGet() response.data unavailable ');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log('axiosGet() done.');
}

/*
 *component Main
 *using class syntax from ES6
 *Webpack needs Babel to process ES6 into ES5 syntaxes in order for this class to work
 */
class Main extends React.Component {
    render () {
        return (
            <div>
                <p>main</p>
                <button onClick={axiosGet}>axios</button>
            </div>
        );
    }
}
export default Main;
