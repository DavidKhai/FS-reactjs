import axios from 'axios';
import React, { Component } from 'react';
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';
import Search from './Search';
import Footer from './Footer';
import Header from './Header';

const getDataAction = () => {
    return axios.get("/getData01")
                .then((res) => res.data)
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: null,
          itemEditObj: '',
           statusFormEdit: false,
           statusFormAdd: false,
           valueSearchText: ''
        }
      }
      
      componentWillMount() {
        if(this.state.data === null){
          getDataAction().then((res) => {
            this.setState({
              data: res
            });
          })
        }
      }
    
      getItemAddProduct = (itemAdd) => {
        var dataTemp = this.state.data;
        dataTemp.push(itemAdd);
        this.setState({
          data: dataTemp
        });
      }
      getEditDataProduct = (itemEdit) => {
        this.setState({
          itemEditObj: itemEdit
        });
      }
      getDataUpdateEdit = (itemUpdate) => {
        var dataTemp = this.state.data;
        dataTemp.forEach((value, key) => {
          if(value.id === itemUpdate.id){
            value.product_name = itemUpdate.product_name;
            value.product_price = itemUpdate.product_price;
            value.product_image = itemUpdate.product_image;
          }
        });
        this.setState({
          data: dataTemp
        });
      }
      getIdDeleteDataProduct = (idItemEdit) => {
        var tempDataAfterDelete  = this.state.data;
        tempDataAfterDelete = tempDataAfterDelete.filter(item => item.id !== idItemEdit);
        this.setState({
          data: tempDataAfterDelete
        });
      }
      changeStatusFormEdit = () => {
        this.setState({
          statusFormEdit: !this.state.statusFormEdit
        });
      }
      changeStatusFormAdd = () => {
        this.setState({
          statusFormAdd: !this.state.statusFormAdd
        });
      }
      getSearchText = (searchText) => {
        this.setState({
          valueSearchText: searchText
        });
      }
    render() {
        var arrResultSearch = [];
        if(this.state.data){ //Khắc phục lỗi ForEach null
            this.state.data.forEach((product) => {
                if(product.product_name.indexOf(this.state.valueSearchText) !== -1){
                arrResultSearch.push(product);
                }
            })
        }
        return (
            <div>
                <Header/>
                <Search 
                    statusFormAdd={this.state.statusFormAdd}
                    changeStatusFormAdd={() => this.changeStatusFormAdd()}
                    getSearchText={(searchText) => this.getSearchText(searchText)}
                    showResultSearch={() => this.showResultSearch()}/>
                <AddProduct 
                    getItemAddProduct={(itemAdd) => this.getItemAddProduct(itemAdd)}
                    statusFormAdd={this.state.statusFormAdd}
                    changeStatusFormAdd={() => this.changeStatusFormAdd()}/>
                <ListProduct 
                    data={arrResultSearch}
                    getEditDataProduct={(itemEdit) => this.getEditDataProduct(itemEdit)}
                    dataEditItemObj={this.state.itemEditObj}
                    getDataUpdateEdit={(itemUpdate) => this.getDataUpdateEdit(itemUpdate)}
                    getIdDeleteDataProduct={(idItemEdit) => this.getIdDeleteDataProduct(idItemEdit)}
                    statusFormEdit={this.state.statusFormEdit}
                    changeStatusFormEdit={() => this.changeStatusFormEdit()}/>
                <Footer/>
               
                
            </div>
        );
    }
}

export default Home;