import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    
    showButtonAdd = () => {
        if(this.props.statusFormAdd === false){
            return(
                <button onClick={() => this.handleClickBtn()} type="button" className="btn btn-sm btn-success">Thêm sản phẩm</button>
            )
        }
        else{
            return(
                <button onClick={() => this.handleClickBtn()} type="button" className="btn btn-sm btn-danger ml-3">Đóng</button>
            )
        }
    }
    handleClickBtn = () => {
        this.props.changeStatusFormAdd();
    }
    isChange = (event) => {
        this.setState({
            searchText: event.target.value
        });
        this.props.getSearchText(this.state.searchText);
    }
    getSearchText = () => {
        this.props.getSearchText(this.state.searchText);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 mx-auto">
                    <div className="form-group btn-group d-flex">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_search" id="product_search" placeholder="Nhập tên sản phẩm cần tìm" />
                        <button onClick={() => this.getSearchText()} type="button" className="btn btn-secondary">Search</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-end">
                        {
                            this.showButtonAdd()
                        }
                        
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Search;