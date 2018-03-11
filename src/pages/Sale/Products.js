import React from "react";
import "./Products.css";
import {
    Toolbar,
    Typography,
    Grid,
    InputAdornment,
    IconButton,
    TextField,
    Drawer,
    GridList,
    GridListTile,
    withStyles,
    colors
} from "material-ui";
import {
    ArrowDropUp,
    ArrowDropDown,
    Clear,
    Search,
    KeyboardArrowDown,
    KeyboardArrowUp
} from "material-ui-icons";
import Subheader from "material-ui/List/ListSubheader";

const listProducts = [
    {
        id: 1,
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 2,
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 3,
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 4,
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 5,
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 6,
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 7,
        img: "https://material-ui-next.com/static/images/grid-list/mushroom.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 8,
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 9,
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    },
    {
        id: 10,
        img: "https://material-ui-next.com/static/images/grid-list/plant.jpg",
        title: "Image",
        author: "author",
        price: "600.000"
    }
];

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
        backgroundColor: "#e0e0e0",
        height: 350
    },
    gridList: {
        height: 350
    },
};

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            open: true
        };
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    handleDrawerToggle = (e) => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    render() {
        const { classes } = this.props;
        const { listBills, value } = this.state;
        return (
            <Drawer
                variant="persistent"
                classes={{
                    paper: classes.drawerPaper
                }}
                className="drawer"
                anchor="bottom"
                open={this.state.open}
            >

                <div className="products-header">
                    <IconButton onClick={this.handleDrawerToggle}>
                        <KeyboardArrowDown />
                    </IconButton>
                    <Subheader>Danh mục</Subheader>
                </div>

                <div className="products-content">
                    <div className="product-item">
                        <img src="https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg" alt="Forest" />
                        <div className="container">
                            <span className="product-price">1.800.800</span><br />
                            <span className="product-name">Thịt heo lái A</span>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="https://i.ytimg.com/vi/mEBFswpYms4/maxresdefault.jpg" alt="Forest" />
                        <div className="container">
                            <span className="product-price">1.800.800</span><br />
                            <span className="product-name">Thịt heo lái A</span>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Forest" />
                        <div className="container">
                            <span className="product-price">1.800.800</span><br />
                            <span className="product-name">Thịt heo lái A</span>
                        </div>
                    </div>
                </div>
            </Drawer>
        );
    }
}

export default withStyles(styles)(Products);