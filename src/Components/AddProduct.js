import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name, product_price, product_image) => {
    return axios.post("/addData",{product_name, product_price, product_image})
                .then((res) => res.data)
}
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price: '',
            product_image: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    addProduct = () => {
        //get axios
        var {product_name, product_price, product_image} = this.state;
        if(product_name !== ''){
            addProductAction(product_name, product_price, product_image).then((resp) => {
                console.log(resp);
            })
        }

        //add realtime 
        var itemAdd = {};
        itemAdd.product_name = product_name;
        itemAdd.product_price = product_price;
        itemAdd.product_image = product_image;

        this.props.getItemAddProduct(itemAdd);
        this.props.changeStatusFormAdd();

    }
    showFormAdd = () => {
        if(this.props.statusFormAdd){
            return(
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-12 mb-3">
                            <h3 className="text-center text-success mb-3">Thêm sản phẩm</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="product_name">Tên sản phẩm</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" name="product_name" className="form-control" placeholder="Nhập tên sản phẩm" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product_price">Giá sản phẩm</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" name="product_price" className="form-control" placeholder="Nhập giá sản phẩm" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product_image">Link ảnh sản phẩm</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" name="product_image" className="form-control" placeholder="Nhập tên sản phẩm" />
                                </div>
                                <button onClick={() => this.addProduct()} type="reset" className="btn btn-sm btn-success">Thêm</button>
                            </form>    
                        </div>
                    </div>
                    <hr/>
                </div>    
            )
        }
    }
    
    render() {
        return (
            <div >
                {
                    this.showFormAdd()
                }
               
            </div>

        );
    }
}

export default AddProduct;