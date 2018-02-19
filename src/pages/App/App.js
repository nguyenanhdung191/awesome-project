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
					<div className="header-bar">
						<Menu
							anchorEl={this.state.anchorEl}
							open={this.state.menu}
							onClose={this.handleCloseMenu}
						>
							<div></div>
							<Link to="/stock">
								<MenuItem onClick={this.handleCloseMenu}>
									<ListItemIcon>
										<ProductIcon />
									</ListItemIcon>
									<ListItemText inset primary="Hàng hóa" />
								</MenuItem>
							</Link>
							<Link to="/transaction">
								<MenuItem onClick={this.handleCloseMenu}>
									<ListItemIcon>
										<TransactionIcon />
									</ListItemIcon>
									<ListItemText inset primary="Giao dịch" />
								</MenuItem>
							</Link>
							<Link to="/partner">
								<MenuItem onClick={this.handleCloseMenu}>
									<ListItemIcon>
										<PartnerIcon />
									</ListItemIcon>
									<ListItemText inset primary="Đối tác" />
								</MenuItem>
							</Link>
							<Link to="/finance">
								<MenuItem onClick={this.handleCloseMenu}>
									<ListItemIcon>
										<FinanceIcon />
									</ListItemIcon>
									<ListItemText inset primary="Sổ quỹ" />
								</MenuItem>
							</Link>
							<Link to="/report">
								<MenuItem onClick={this.handleCloseMenu}>
									<ListItemIcon>
										<ReportIcon />
									</ListItemIcon>
									<ListItemText inset primary="Báo cáo" />
								</MenuItem>
							</Link>
						</Menu>
						<div className="app-title">
							Awesome App
						</div>
						<div>
							<Button
								style={{
									marginRight: 20,
									width: 150,
									color: "#FFFFFF",
									backgroundColor: "#4bac4d"
								}}
								onClick={this.handleOpenMenu}
								variant="raised">
								<ManagingIcon style={{ marginRight: 10 }} />
								Quản lý
								</Button>
							<Link to="/sale">
								<Button
									variant="raised"
									style={{
										marginRight: 20,
										width: 150,
										color: "#FFFFFF",
										backgroundColor: "#f44336"
									}}>
									<SaleIcon style={{ marginRight: 10 }} />
									Bán hàng
							</Button>
							</Link>

						</div>
					</div>
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
