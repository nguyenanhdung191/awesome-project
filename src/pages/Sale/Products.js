import React from "react";
import "./Sale.css";
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

class Products extends React.Component {
    state = {
        value: 0,
        open: true,
        listBills: [{
            title: "Hóa đơn"
        }]
    };

    handleDrawerToggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

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

    render() {
        const { styles } = this.props;
        const { listBills, value } = this.state;
        return (
            <div className="left-content">
                <IconButton
                    onClick={this.handleDrawerToggle}
                    className="products-button"
                >
                    <KeyboardArrowUp />
                </IconButton>

                <Drawer
                    variant="persistent"
                    classes={{
                        paper: styles.drawerPaper
                    }}
                    className="drawer"
                    anchor="bottom"
                    open={this.state.open}
                >
                    <GridList
                        cellHeight={180}
                        className={styles.gridList}
                        cols={2.8}
                        spacing={1}
                    >
                        <GridListTile key="Subheader" cols={2.8} style={{ height: "auto" }}>
                            <div className="products-header">
                                <IconButton onClick={this.handleDrawerToggle}>
                                    <KeyboardArrowDown />
                                </IconButton>
                                <Subheader>Danh mục</Subheader>
                            </div>
                        </GridListTile>

                        {listProducts.map(tile => (
                            <GridListTile key={tile.img} cols={0.4}>
                                <div className="gallery">
                                    <img src={tile.img} alt={tile.title} />
                                    <div className="desc">
                                        Add a description of the image here
                  </div>
                                </div>
                            </GridListTile>
                        ))}
                    </GridList>
                </Drawer>
            </div>
        );
    }
}