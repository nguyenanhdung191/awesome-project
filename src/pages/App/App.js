import React, { Component } from 'react';
import Button from 'material-ui/Button';
import ManagingIcon from "material-ui-icons/Settings";
import SaleIcon from "material-ui-icons/ShoppingCart";
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';

import Managing from "../Managing/Managing.js";
import Sale from "../Sale/Sale.js";


import {
	BrowserRouter,
	Route,
	Link
} from 'react-router-dom';



import "./App.css";
import "../Managing/Managing.css";

class App extends Component {
	constructor() {
		super();
	}


	render() {

		return (
			<BrowserRouter>
				<div className="root">
					{/* <Route exact path="/" component={Login} /> */}
					<Route path="/managing" component={Managing} />
					<Route path="/sale" component={Sale} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
