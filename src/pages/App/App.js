import React, { Component } from 'react';
import Button from 'material-ui/Button';
import ManagingIcon from "material-ui-icons/Settings";
import SaleIcon from "material-ui-icons/ShoppingCart";
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import ProductIcon from "material-ui-icons/ShoppingBasket";
import TransactionIcon from "material-ui-icons/SwapVert";
import PartnerIcon from "material-ui-icons/SupervisorAccount";
import FinanceIcon from "material-ui-icons/AttachMoney";
import ReportIcon from "material-ui-icons/InsertChart";

import Stock from "../Managing/Stock.js";
import Transaction from "../Managing/Transaction.js";
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
		this.state = {
			anchorEl: null,
			menu: false
		}
	}

	handleCloseMenu = () => {
		this.setState({
			anchorEl: null,
			menu: false
		});
	};

	handleOpenMenu = (event) => {
		this.setState({
			anchorEl: event.currentTarget,
			menu: true
		});
	};

	render() {
		return (
			<BrowserRouter>
				<div className="root">
					<div className="body">
						<Route exact path="/" component={Stock} />
						<Route path="/stock" component={Stock} />
						<Route path="/transaction" component={Transaction} />
						<Route path="/sale" component={Sale} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
