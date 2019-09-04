import React from 'react';

export type LoginProps = {
    logIn: (event: React.FormEvent<HTMLFormElement>) => void;
    errorMsg: string
};

const Login: React.FC<LoginProps> = React.memo( ({ logIn, errorMsg }) => {
    return (
        <form className="ui form" onSubmit={logIn}>
            <p>{ errorMsg }</p>
            <div className="field">
                <label>Login</label>
                <input placeholder="Enter login here" name="login" required pattern = "([A-Za-z]){2,}"/>
            </div>

            <div className="field">
                <label>Password</label>
                <input placeholder="Enter password here" name="password" required/>
            </div>

            <button className="ui button" type="submit">Submit</button>
        </form>
    );
});

export default Login;
