import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3"><a href="/">Manage Product</a></h1>
                <p className="lead">Project use ReactJS + NodeJS + PostgreSql</p>
                <hr className="my-2" />
            </div>

        );
    }
}

export default Header;