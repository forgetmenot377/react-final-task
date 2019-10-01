import React, { useState } from 'react';
import Login from "../components/Login";
import httpService from "../services/http.service";
import { withRouter } from "react-router";
import { History } from 'history';

export type LoginProps = {
    history: History
};

const LoginPage: React.FC<LoginProps> = React.memo(({ history }) => {
    const [errorMsg, setErrorMsg] = useState(
        ''
    );
    const logIn = (event: any): void => {
        event.preventDefault();
        const login: string = event.target.elements.login.value;
        const password: string = event.target.elements.password.value;

        httpService.logIn({
            login: login,
            password: password
        }).then((response: any) => {
            localStorage.setItem('session-token', response.headers['session-token']);
            localStorage.setItem('login', login);
            setErrorMsg('');
            history.push("/");
        })
            .catch((error: any) => {
                setErrorMsg('You entered wrong login or password');
                console.log(error);
            });
    };

    return (
        <div className="loginPage">
            <Login
                logIn={logIn}
                errorMsg={errorMsg}
            />
        </div>
    )
});

export default withRouter(LoginPage);
