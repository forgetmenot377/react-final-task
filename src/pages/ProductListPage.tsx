import React, { Component } from 'react';
import Header from "../components/Header";
import httpService from "../services/http.service";
import { withRouter } from "react-router";

class ProductListPage extends Component<any> {
    getUserName = () => {
        const login = localStorage.getItem('login');
        return login ? login : '';
    };

    logOut = (): void => {
        const data = { login: localStorage.getItem('login') };
        httpService.logOut(data,{
            headers: {
                'session-token': localStorage.getItem('session-token')
            }}).then(() => {
            localStorage.removeItem('session-token');
            localStorage.removeItem('login');
            this.props.history.push("/login");
        })
            .catch((error: any) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="productListPage">
                <Header logOut={this.logOut} userName={this.getUserName()}/>
            </div>
        )
    }
}

export default withRouter(ProductListPage);
