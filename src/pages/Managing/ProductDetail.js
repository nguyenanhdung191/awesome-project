import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import SaveIcon from 'material-ui-icons/Save';
import CloseIcon from 'material-ui-icons/Close';
import DeleteIcon from 'material-ui-icons/Delete';


class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <div className={`product-detail-dialog-container ${(this.props.showed) ? " show" : " hide"}`} >
                <div className="product-detail-dialog">
                    <div className="product-detail-dialog-title">Chi tiết hàng hóa</div>
                    <div className="product-detail-dialog-content">
                        <div className="product-image-container">
                            <img alt="Chưa có hình" src="./images/1.png" className="product-image" />
                        </div>
                        <div className="product-fields-container">
                            <TextField
                                label="ID hàng hoá"
                                placeholder="ID Hàng hóa"
                                style={{ width: 300 }}
                            />
                            <br />
                            <br />
                            <TextField
                                label="Mã hàng hoá"
                                placeholder="Mã hàng hoá"
                                style={{ width: 300 }}
                            />
                            <br />
                            <br />
                            <TextField
                                label="Tên hàng hoá"
                                placeholder="Tên hàng hoá"
                                style={{ width: 300 }}
                            />
                            <br />
                            <br />
                            <TextField
                                label="Giá vốn"
                                placeholder="Giá vốn"
                                style={{ width: 300 }}
                            />
                            <br />
                            <br />
                            <TextField
                                label="Giá bán"
                                placeholder="Giá bán"
                                style={{ width: 300 }}
                            />
                            <br />
                            <br />
                            <TextField
                                label="Tồn kho"
                                placeholder="Tồn kho"
                                style={{ width: 300 }}
                            />
                        </div>
                    </div>
                    <div className="product-detail-dialog-buttons">
                        <Button
                            variant="raised"
                            style={{
                                marginRight: 20,
                                width: 100,
                                color: "#FFFFFF",
                                backgroundColor: "#f44336"
                            }}>
                            <DeleteIcon style={{ marginRight: 5 }} />
                            Xóa
                        </Button>
                        <Button
                            variant="raised"
                            style={{
                                marginRight: 20,
                                width: 100,
                                color: "#FFFFFF",
                                backgroundColor: "#4bac4d"
                            }}>
                            <SaveIcon style={{ marginRight: 5 }} />
                            Lưu
                        </Button>
                        <Button
                            variant="raised"
                            onClick={this.props.handleHideProductDetail}
                            style={{
                                width: 100
                            }}>
                            <CloseIcon style={{ marginRight: 5 }} />
                            Đóng
                        </Button>

                    </div>
                </div>
            </ div >
        );
    }
}

export default ProductDetail;
