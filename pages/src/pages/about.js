import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <p>
        This grassroot app uses React.js, JSX and Webpack bundler to achieve a
        development environment and to provide an example configuration to build
        the app for production deployment.
            </p>
            <p>
                <Link to="/">Home</Link>
            </p>
        </>
    );
};

export default About;
