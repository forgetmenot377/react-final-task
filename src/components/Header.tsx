import React from 'react';

export type HeaderProps = {
    logOut: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userName: string | null
};

const Header: React.FC<HeaderProps> = React.memo(({ logOut, userName }) => {
    return (
        <header className="ui secondary  menu">
            <h1>Logo</h1>
            <div className="right menu">
                <div className="item">
                    <p>Hi, { userName }</p>
                </div>
                <button
                    className="ui primary button"
                    onClick={logOut}
                >Logout</button>
            </div>
        </header>
    )
});

export default Header;
