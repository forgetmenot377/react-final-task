import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import ProductListPage from "../pages/ProductListPage";
import { PrivateRoute } from "../routes/private-route";
import Header from "./Header";

const App = () => {
    const loggedIn = () => {
        return localStorage.getItem('session-token');
    };

    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <PrivateRoute
                            component={ProductListPage}
                            exact
                            path="/"/>

                        <Route exact path="/login" render={() => (
                            loggedIn() ? (
                                <Redirect to="/" />
                            ) : (
                                <LoginPage />
                            )
                        )}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
