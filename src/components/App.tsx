import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import ProductListPage from "../pages/ProductListPage";
import { PrivateRoute } from "../routes/private-route";

class App extends React.Component<any> {
    loggedIn = () => {
        return localStorage.getItem('session-token');
    };

    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <PrivateRoute
                                component={ProductListPage}
                                exact
                                path="/"/>

                            <Route exact path="/login" render={() => (
                                this.loggedIn() ? (
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
    }
}

export default App;
