import React from 'react';
/*in v6 Switch was replaced by Routes*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import './style/main.less';

const Main = () => {
    return (
        <>
            <Router>
                <Routes>
		    {/*in v6 component prop was replaced in favor of element*/}
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
};
export default Main;
