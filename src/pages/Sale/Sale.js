import React from "react";
import "./Sale.css";
import PropTypes from "prop-types";
import {
    Toolbar,
    Typography,
    Grid,
    InputAdornment,
    IconButton,
    TextField,
    Tabs, Tab,
    Drawer,
    Divider,
    GridList, GridListTile,
    List, ListItem, ListItemText, ListItemIcon,
    withStyles,
    colors
} from "material-ui";
import Subheader from "material-ui/List/ListSubheader";
import {
    Add, Remove,
    ArrowDropUp, ArrowDropDown,
    Clear,
    Search,
    KeyboardArrowDown, KeyboardArrowUp
} from "material-ui-icons";
import MenuIcon from "material-ui-icons/Menu";
import Menu, { MenuItem } from "material-ui/Menu";
import FormControl from "material-ui/Form/FormControl";
import Input from "material-ui/Input/Input";

import Products from "./Products.js";

const styles = {
    root: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden"
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    drawerPaper: {
        width: "74.5%",
        backgroundColor: "#e0e0e0"
    },
    gridList: {
        height: 350
    },
    card: {
        maxWidth: 345
    },
    media: {
        height: 200
    }
};

class TopBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null
    };

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className="header-bar">
                <Toolbar>
                    <FormControl className="App-input-form">
                        <Input
                            type="text"
                            placeholder="Search"
                            color="inherit"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <div className="App-menu-btn">
                        <IconButton aria-haspopup="true" onClick={this.handleMenu}>
                            <MenuIcon style={{ fontSize: 30 }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </div>
        );
    }
}

const BillTab = (props) => {
    return (
        <div className="shopping-cart">

            <div className="shopping-list">

                <div className="item">
                    <div className="cell-order">1</div>
                    <div className="cell-action"><Clear /></div>

                    <div className="row-product">

                        {/* <div className="description">
                            <span>Common Projects Common Projects</span>
                        </div>

                        <div className="quantity">
                            <button className="plus-btn" type="button" name="button">
                                <Add style={{ width: "18px" }} />
                            </button>
                            <input type="text" name="name" value="1" />
                            <button className="plus-btn" type="button" name="button">
                                <Remove style={{ width: "18px" }} />
                            </button>
                        </div>
                        <div className="price">
                            <input type="text" name="name" />
                        </div>
                        <div className="total-price">$549</div> */}
                    </div>
                </div>
            </div>


        </div>
    )
}

class LeftPager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            listBills: [{
                title: "Hóa đơn"
            }]
        };
    }

    handleChangeTab = (event, value) => {
        this.setState({
            value: value
        })
    }

    handleAddBill = () => {
        this.state.listBills.push({
            title: "Hóa đơn",
            list: {}
        })
        this.setState(prevState => ({
            listBills: this.state.listBills
        }));
    }

    // componentDidMount() {
    //     this.textInput.focusTextInput();
    // }

    render() {
        const { styles } = this.props;
        const { listBills, value } = this.state;
        return (
            <div className="left-content">
                <Tabs
                    value={value}
                    onChange={this.handleChangeTab}
                    className="App-Tabs"
                    scrollable
                    scrollButtons="on"
                    style={{
                        flexWrap: "nowrap",
                        transform: "translateZ(0)"
                    }}
                >
                    {listBills.map((bill, idex) => (
                        <Tab key={idex} label={`${bill.title} ${idex + 1}`} className="App-Tab" />
                    ))}

                    <Tab
                        label="+"
                        onClick={this.handleAddBill}
                        style={{
                            backgroundColor: "#FFFFFF",
                            maxWidth: 40,
                            minWidth: 0
                        }}
                    />
                </Tabs>

                {listBills.map((bill, idex) => {
                    return (
                        <div key={idex}>
                            {value === idex && <BillTab list > Bill {`${idex + 1}`}</BillTab>}
                        </div>
                    )
                })}

                <Products
                    onRef={ref => (this.child = ref)}
                >
                </Products>

                <IconButton
                    onClick={() => this.child.handleDrawerToggle()}
                    className="products-button"
                >
                    <KeyboardArrowUp />
                </IconButton>
            </div>
        );
    }
}

class RightPager extends React.Component {
    render() {
        return <div className="right-content" />;
    }
}

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <TopBar props={this.props} />
                <div className="wrap-content">
                    <LeftPager styles={this.props.classes} />
                    <RightPager />
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(Home);
