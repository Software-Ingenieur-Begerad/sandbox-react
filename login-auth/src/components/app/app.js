import React, { useState } from 'react';

import Login from '../login/login';
import FareZones from '../fare-zones/fare-zones';

function App () {
    const [token, setToken] = useState();

    if (!token) {
        console.log('from App() token unavailable');
        return <Login setToken={setToken} />;
    } else {
        console.log('from App() token available');
        return <FareZones />;
    }
}

export default App;
