// Modules
import React from "react";
// Components
import Header from "./Header";
import Cantidad from "./Cantidad";

class App extends React.Component {
    state = {
        cantidad: "",
        monedas: ["cobre", "plata", "oro", "platinio"],
        selectedIndex: 0
    };
    updateCantidad = cantidad => {
        this.setState({ cantidad: cantidad });
    };
    updateSelected = index => {};
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <Cantidad
                        updateCantidad={this.updateCantidad}
                        cantidad={this.state.cantidad}
                    />
                    <div className="col-4">botones</div>
                    <div className="col-4">Resultado</div>
                </div>
            </div>
        );
    }
}

export default App;
