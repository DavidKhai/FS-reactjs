import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const addAccountAction = (account_name, account_password) => {
    return axios.post("/signup", {account_name, account_password})
                .then()
}
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account_name: '',
            account_password: '',
            signupStatus: ''

        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        var {account_name, account_password} = this.state;

        addAccountAction(account_name, account_password).then((resp) => {
            if(resp.data.message){
                this.setState({
                    signupStatus: resp.data.message
                });
            }
        });
    }
    render() {
        return (
            <div className="signup" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-4 mx-auto p-3" style={{background: '#6c757d40', borderRadius: '10px'}}>
                        <h3 className="text-center mb-3">SignUp account</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Name:</label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="account_name" placeholder="Enter name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input onChange={(event) => this.isChange(event)}  type="password" className="form-control" name="account_password" placeholder="Enter password"/>
                            </div>
                            <button onClick={(event)=> this.submitForm(event)} type="reset" className="btn btn-block btn-primary">SignUp</button>
                        </form> 
                        <h5 className="text-center text-success mt-3">{this.state.signupStatus}</h5>
                        <NavLink className="d-block text-center mt-3" to="/">Login</NavLink>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;