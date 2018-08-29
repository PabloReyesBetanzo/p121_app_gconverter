// Modules
import React from "react";
// Assets
import logo from "../assets/images/logo.png";

class Header extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <header className="col-3">
                    <img
                        src={logo}
                        alt="Dungeons &amp; Dragons"
                        className="img-fluid"
                    />
                </header>
            </div>
        );
    }
}

export default Header;
