// Modules
import React from "react";
// Components
import Header from "./Header";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-4">Input</div>
                    <div className="col-4">botones</div>
                    <div className="col-4">Resultado</div>
                </div>
            </div>
        );
    }
}

export default App;
