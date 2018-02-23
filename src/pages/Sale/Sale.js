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
    Tabs,
    Tab,
    Drawer,
    Divider,
    GridList,
    GridListTile,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    withStyles,
    colors
} from "material-ui";
import Subheader from "material-ui/List/ListSubheader";
import {
    ArrowDropUp,
    ArrowDropDown,
    Clear,
    Search,
    KeyboardArrowDown,
    KeyboardArrowUp
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

const listProducts = [
    {
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    }
];

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
            {/* <List component="nav">
                <ListItem divider>
                    <Grid container>
                        <Grid item xs={0.5}>
                            <ListItemIcon>
                                <Clear />
                            </ListItemIcon>
                        </Grid>
                        <Grid item xs={0.5}>
                            <ListItemText primary="1" />
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemText primary="Thịt Heo Lái A" />
                        </Grid>
                        <Grid item xs={6} style={{ display: "flex" }}>

                            <Input
                                id="adornment-weight"
                                // value={this.state.weight}
                                // onChange={this.handleChange('weight')}
                                startAdornment={<InputAdornment position="start">
                                    <IconButton>
                                        <ArrowDropUp />
                                    </IconButton>
                                </InputAdornment>}
                                endAdornment={<InputAdornment position="end">
                                    <IconButton>
                                        <ArrowDropDown />
                                    </IconButton>
                                </InputAdornment>}
                            />

                            <Input style={{ flex: 1 }}
                                id="adornment-weight"
                            // value={this.state.weight}
                            // onChange={this.handleChange('weight')} 
                            />

                            <ListItemText primary="1,500,000" />


                        </Grid>

                    </Grid>
                </ListItem>
            </List> */}
            <div className="item">
                <div className="buttons">
                    <span className="delete-btn">
                        <Clear />
                    </span>
                </div>

                <div className="image">
                    <img src="item-1.png" alt="" />
                </div>

                <div className="description">
                    <span>Common Projects</span>
                    <span>Bball High</span>
                    <span>White</span>
                </div>

                <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                        <img src="plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1" />
                    <button className="minus-btn" type="button" name="button">
                        <img src="minus.svg" alt="" />
                    </button>
                </div>
                <div className="price">
                    <input type="text" name="name" value="1" />
                </div>
                <div className="total-price">$549</div>
            </div>
            <div className="item">
                <div className="buttons">
                    <span className="delete-btn">
                        <Clear />
                    </span>
                </div>

                <div className="image">
                    <img src="item-1.png" alt="" />
                </div>

                <div className="description">
                    <span>Common Projects</span>
                    <span>Bball High</span>
                    <span>White</span>
                </div>

                <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                        <img src="plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1" />
                    <button className="minus-btn" type="button" name="button">
                        <img src="minus.svg" alt="" />
                    </button>
                </div>
                <div className="price">
                    <input type="text" name="name" value="1" />
                </div>
                <div className="total-price">$549</div>
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
