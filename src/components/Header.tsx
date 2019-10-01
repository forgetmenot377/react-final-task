import React from 'react';
import httpService from "../services/http.service";
import { withRouter } from "react-router";
import { History } from 'history';

export type HeaderProps = {
    history: History
};

const Header: React.FC<HeaderProps> = React.memo(({ history }) => {
    const getUserName = () => {
        const login = localStorage.getItem('login');
        return login ? login : '';
    };

    const logOut = (): void => {
        const data = { login: localStorage.getItem('login') };
        httpService.logOut(data,{
            headers: {
                'session-token': localStorage.getItem('session-token')
            }}).then(() => {
            localStorage.removeItem('session-token');
            localStorage.removeItem('login');
            history.push("/login");
        })
            .catch((error: any) => {
                console.log(error);
            });
    };

    if (history.location.pathname==='/login') {
        return null;
    }

    return (
        <header className="ui secondary  menu">
            <h1>Logo</h1>
            <div className="right menu">
                <div className="item">
                    <p>Hi, { getUserName() }</p>
                </div>
                <button
                    className="ui primary button"
                    onClick={logOut}
                >Logout</button>
            </div>
        </header>
    )
});

export default withRouter(Header);
