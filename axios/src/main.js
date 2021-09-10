import React from 'react';
import './style/main.less';

function axiosGet () {
    console.log('axiosGet() this: ', this);
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
