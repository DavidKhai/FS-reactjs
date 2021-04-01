import React, { Component } from 'react';
import axios from 'axios';

const EditProductAction = (id, product_name, product_price, product_image) => {
    return axios.put('/editData',{id, product_name, product_price, product_image})
                .then((res) => res.data)
}
class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            product_name: '',
            product_price: '',
            product_image: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.dataEditItemObj.id,
            product_name: nextProps.dataEditItemObj.product_name,
            product_price: nextProps.dataEditItemObj.product_price,
            product_image: nextProps.dataEditItemObj.product_image
        });
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    updateEditObj = () => {
        var {id, product_name, product_price, product_image} = this.state;
        var itemUpdate = {};
        itemUpdate.id = id;
        itemUpdate.product_name = product_name;
        itemUpdate.product_price = product_price;
        itemUpdate.product_image = product_image;
        
        this.props.getDataUpdateEdit(itemUpdate);

        //edit data nodejs
        EditProductAction(id, product_name, product_price, product_image).then((resp) => {
            console.log(resp);
        })
        this.props.changeStatusFormEdit();
    }
    showEditForm = () => {
        if(this.props.statusFormEdit){
            return(
                <div className="col-sm-12">
                    <h3 className="text-center text-warning mb-3">Sửa sản phẩm</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="product_name">Tên sản phẩm</label>
                            <input defaultValue={this.props.dataEditItemObj.product_name} onChange={(event) => this.isChange(event)} type="text" name="product_name" className="form-control" placeholder="Nhập tên sản phẩm" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="product_price">Giá sản phẩm</label>
                        <input defaultValue={this.props.dataEditItemObj.product_price} onChange={(event) => this.isChange(event)} type="text" name="product_price" className="form-control" placeholder="Nhập giá sản phẩm" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="product_image">Link ảnh sản phẩm</label>
                        <input defaultValue={this.props.dataEditItemObj.product_image} onChange={(event) => this.isChange(event)} type="text" name="product_image" className="form-control" placeholder="Nhập tên sản phẩm" />
                        </div>
                        <button onClick={() => this.updateEditObj()} type="reset" className="btn btn-sm btn-warning text-white">Save</button>
                    </form>    
                </div>
            )
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.showEditForm()
                }
            </div>
        );
    }
}

export default EditProduct;