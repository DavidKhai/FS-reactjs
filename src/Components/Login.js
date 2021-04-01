import React, { Component } from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import axios from 'axios';

const checkAccountAction = (account_name, account_password) => {
    return axios.post("/login", {account_name, account_password})
                .then()
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            account_name: '',
            account_password: '',
            loginStatus: '',
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

        checkAccountAction(account_name, account_password).then((res) => {
            console.log(res.data);
            if(res.data.message){
                this.setState({
                    loginStatus: res.data.message
                });
                
            }
            else{
                this.setState({
                    loginStatus: res.data[0].account_name
                });
                this.setState({
                    isRedirect: true
                });
            }
        });
        
    }
    
    render() {
        if(this.state.isRedirect){
            return <Redirect to="/admin-@1256hrkhf" />;
        }
        return (
            <div className="login" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-4 mx-auto p-3" style={{background: '#6c757d40', borderRadius: '10px'}}>
                        <h3 className="text-center mb-3">Login account</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Name:</label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="account_name" placeholder="Enter name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input onChange={(event) => this.isChange(event)}  type="password" className="form-control" name="account_password" placeholder="Enter password"/>
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Remember me
                                </label>
                            </div>
                            <button onClick={(event)=> this.submitForm(event)} type="submit" className="btn btn-block btn-primary">Login</button>
                        </form> 
                        <NavLink className="d-block text-center mt-3" to="/signup">SignUp</NavLink>
                        <h5 className="text-center text-danger mt-3">{this.state.loginStatus}</h5>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;