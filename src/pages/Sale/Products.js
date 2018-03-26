import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import api from '../../api'
import { fromProducts } from '../../actions'
import * as fromReducers from '../../reducers'

import "./Products.css";
import {
    IconButton,
    TextField,
    Drawer,
    withStyles
} from "material-ui";
import {
    KeyboardArrowDown,
} from "material-ui-icons";
import Subheader from "material-ui/List/ListSubheader";

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


const Product = ({ product }) => {
    return (
        <div className="product-item">
            <img src="https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg" alt="Forest" />
            <div className="container">
                <span className="product-price">{product.price}</span><br />
                <span className="product-name">{product.title}</span>
            </div>
        </div>
    )
}


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

        const { store } = this.context;
        api.getProducts(products => {
            store.dispatch(fromProducts.acGetProducts(products));
        })
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
        const { products, classes } = this.props;
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
                    {products.map(item =>
                        <Product
                            key={item.id}
                            product={item}
                        />
                    )}
                </div>
            </Drawer>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: fromReducers.fromProducts.getVisibleProducts(state.products)
    }
}

Products.contextTypes = {
    store: PropTypes.object
}

export default withStyles(styles)(connect(mapStateToProps)(Products));