import React from 'react';
import './style/main.less';
import axios from 'axios';

function axiosGet () {
    console.log('axiosGet() started...');

    //send HTTP GET via axios
    axios
        .get('https://test-tarifmatrix.vbn.de:4245/fares/area/info')
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
