import React, { Component } from 'react';
import Paper from "material-ui/Paper";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import ProductIcon from "material-ui-icons/ShoppingBasket";

import ProductDetail from "./ProductDetail.js";
import "./Stock.css";

class Stock extends Component {
    constructor() {
        super();
        this.state = {
            showProductDetail: false
        };
    }

    handleShowProductDetail = () => {
        this.setState({
            showProductDetail: true
        })
    }

    handleHideProductDetail = () => {
        this.setState({
            showProductDetail: false
        })
    }


    render() {
        return (
            <div className="stock-page-container">
                {/* <div className="header-bar">
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
                </div> */}
                <ProductDetail showed={this.state.showProductDetail} handleHideProductDetail={this.handleHideProductDetail} />
                <div className="left-bar">
                    <Paper style={{ width: "100%", height: "100%" }}>
                        eeeee
                    </Paper>
                </div>
                <div className="right-bar">
                    <Paper style={{ width: "100%", height: "100%" }}>
                        <div className="managing-page-title-container">
                            <div>
                                <ProductIcon style={{ width: 30, height: 30 }} />
                            </div>
                            <div className="managing-page-title">
                                Quản lý hàng hóa
                            </div>
                        </div>
                        <div className="managing-page-content-container">
                            <Paper>
                                <Table id="stock-table">
                                    <TableHead>
                                        <TableRow className="stock-table-header">
                                            <TableCell>ID hàng hóa</TableCell>
                                            <TableCell>Mã hàng hóa</TableCell>
                                            <TableCell>Tên</TableCell>
                                            <TableCell>Giá vốn</TableCell>
                                            <TableCell>Giá bán</TableCell>
                                            <TableCell>Tồn kho</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow onClick={this.handleShowProductDetail}>
                                            <TableCell>aa</TableCell>
                                            <TableCell>bb</TableCell>
                                            <TableCell>cc</TableCell>
                                            <TableCell>dd</TableCell>
                                            <TableCell>ee</TableCell>
                                            <TableCell>ee</TableCell>
                                        </TableRow>
                                        <TableRow onClick={this.handleShowProductDetail}>
                                            <TableCell>aa</TableCell>
                                            <TableCell>bb</TableCell>
                                            <TableCell>cc</TableCell>
                                            <TableCell>dd</TableCell>
                                            <TableCell>ee</TableCell>
                                            <TableCell>ee</TableCell>
                                        </TableRow>
                                        <TableRow onClick={this.handleShowProductDetail}>
                                            <TableCell>aa</TableCell>
                                            <TableCell>bb</TableCell>
                                            <TableCell>cc</TableCell>
                                            <TableCell>dd</TableCell>
                                            <TableCell>ee</TableCell>
                                            <TableCell>ee</TableCell>
                                        </TableRow>
                                        <TableRow onClick={this.handleShowProductDetail}>
                                            <TableCell>aa</TableCell>
                                            <TableCell>bb</TableCell>
                                            <TableCell>cc</TableCell>
                                            <TableCell>dd</TableCell>
                                            <TableCell>ee</TableCell>
                                            <TableCell>ee</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                    </Paper>
                </div>
            </div >
        );
    }
}

export default Stock;
