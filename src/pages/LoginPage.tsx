import React, { Component } from 'react';
import Login from "../components/Login";
import httpService from "../services/http.service";
import { withRouter } from "react-router";

 class LoginPage extends Component<any> {
    state = {
        error: ''
    };

    logIn = (event: any): void => {
        event.preventDefault();
        const login: string = event.target.elements.login.value;
        const password: string = event.target.elements.password.value;

        httpService.logIn({
            login: login,
            password: password
        }).then((response: any) => {
            localStorage.setItem('session-token', response.headers['session-token']);
            localStorage.setItem('login', login);
            this.setState({error: ''});
            this.props.history.push("/");
        })
            .catch((error: any) => {
                this.setState({error: 'You entered wrong login or password'});
                console.log(error);
            });
    };

    render() {
        return (
            <div className="loginPage">
                <Login
                    logIn={this.logIn}
                    errorMsg={this.state.error}
                />
            </div>
        )
    }
}

export default withRouter(LoginPage);
