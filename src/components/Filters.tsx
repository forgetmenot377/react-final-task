import React from 'react';

const FiltersComponent = () => {
    return (
        <form className="ui form" style={{ padding: 20 }}>
            <div className="fields">
                <div className="four wide field">
                    <div className="ui checkbox">
                        <input type="checkbox" className="hidden" />
                        <label>Available only</label>
                    </div>
                </div>

                <div className="grouped fields">
                    <label htmlFor="fruit">Gender:</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" className="hidden" />
                            <label>Male</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" className="hidden" />
                            <label>Female</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="fruit" className="hidden" />
                            <label>Unisex</label>
                        </div>
                    </div>
                </div>

                <div className="six wide field">
                    <label>Category</label>
                    <div className="ui selection dropdown">
                        <input type="hidden" name="gender" />
                        <i className="dropdown icon"></i>
                        <div className="default text">None</div>
                        <div className="menu">
                            <div className="item" data-value="1">Male</div>
                            <div className="item" data-value="0">Female</div>
                        </div>
                    </div>
                </div>

                <div className="two wide field">
                    <label>Rating</label>
                    <input type="number" pattern="[0-9]"/>
                </div>
            </div>
            <div className="fields">
                <div className="four wide fields">
                    <label>Price</label>
                    <div className="field">
                        <input type="number" placeholder="from" />
                    </div>
                    <div className="field">
                        <input type="number" placeholder="to" />
                    </div>
                </div>

                <button className="ui primary button">
                    Apply
                </button>
                <button className="ui button">
                    Clear
                </button>
            </div>
        </form>
    );
};

export default FiltersComponent;
