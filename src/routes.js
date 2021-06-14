import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

export default function Routes(){
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/chat"><h1>chatpage</h1></Route>
				<Route exact path="/" component={Homepage} />
			</Switch>
		</BrowserRouter>
	);
}