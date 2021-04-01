import React, { Component } from 'react';
import axios from 'axios';

const deleteProductAction = (id) => {
    return axios.put('/deleteData',{id})
                .then((res) => res.data)
}
class ProductItem extends Component {
    EditProduct = () => {
        this.props.getEditDataProduct(this.props.product_value);
        this.props.changeStatusFormEdit();
    }
    DeleteProduct = () => {
        this.props.getIdDeleteDataProduct(this.props.product_value.id);

        //delete data nodejs 
        deleteProductAction(this.props.product_value.id).then((resp) => {
            console.log(resp);
        })
    }
    render() {
        return (
            <div className="col-sm-4 mb-4">
                <div className="card text-left ">
                    <img className="card-img-top p-3" src={this.props.product_image} alt="ảnh sp" height="250px" style={{overflow: 'hidden'}} />
                    <div className="card-body d-flex justify-content-between pb-0">
                        <p className="card-text">{this.props.product_name}</p>
                        <p className="card-text">{this.props.product_price}</p>
                    </div>
                    <div className=" btn-group p-3">
                        <button onClick={() => this.EditProduct()} className="btn btn-sm btn-warning text-white">Edit</button>
                        <button onClick={() => this.DeleteProduct()} className="btn btn-sm btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;