import React, {Fragment} from 'react';
import { Route, Routes} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import NavBar from "./components/nav-bar";
import Loading from "./components/loading";
import Profile from "./pages/profile";
import Home from './pages/home';
import ProtectedRoute from './auth/protected-route';
export default function App() {
    const { isLoading } = useAuth0();
    if (isLoading) {
	return <Loading />;
    }
    return (
	    <Fragment>
		<NavBar/>
		    <Routes>
			<Route
			    path="/"
			    element={<Home/>} />
			<Route
			    path="/profile"
			    element={<ProtectedRoute component={Profile} />}
          />
		    </Routes>
	    </Fragment>
    );
}
