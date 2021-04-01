import React, { Component } from 'react';
import EditProduct from './EditProduct';
import ProductItem from './ProductItem';

class ListProduct extends Component {
    printData = () => {
        if(this.props.data){
            return this.props.data.map((value, key) => {
                return(
                    <ProductItem key={key}
                        product_value={value}
                        product_name={value.product_name}
                        product_price={value.product_price}
                        product_image={value.product_image}
                        getEditDataProduct={(itemEdit) => this.props.getEditDataProduct(itemEdit)}
                        getIdDeleteDataProduct={(idItemEdit) => this.props.getIdDeleteDataProduct(idItemEdit)}
                        changeStatusFormEdit={() => this.props.changeStatusFormEdit()}/>
                        
                )
            })
        }
        
    }
   
    render() {
        
        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center text-info mb-4">Danh sách tất cả sản phẩm</h3>
                        <div className="row">
                            {this.printData()}
                        </div>
                    </div>
                    <EditProduct 
                    dataEditItemObj={this.props.dataEditItemObj}
                    getDataUpdateEdit={(itemUpdate) => this.props.getDataUpdateEdit(itemUpdate)}
                    statusFormEdit={this.props.statusFormEdit}
                    changeStatusFormEdit={() => this.props.changeStatusFormEdit()}/>
                </div>
            </div>

        );
    }
}

export default ListProduct;