import React, { useState, Fragment, useEffect } from 'react';
import { render } from 'react-dom';
import Home from './templates/home';
import Details from './templates/details'
import {FetchUsers} from './data'
import { Route, withRouter, useRouteMatch, Link, Switch } from 'react-router-dom'
import './scss/App.scss'

function App() {

	return (
		<div className="wrapper">
			<header><h1 className="site-title"><Link to="/">My Awesome Frontend App with React and Typescript</Link></h1>
			<p className="description text-center">Fetching users from a remote rest api. Displaying user list page and User details page.</p></header>
			<Switch>
				<Route path='/' exact>
					<Home
						users={FetchUsers()}
					/>
				</Route>
				<Route path="/user/:id">
					<Details/>
				</Route>
			</Switch>
		</div>
	);
}

export default App
