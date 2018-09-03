// Modules
import React from "react";
// Components
import Header from "./Header";
import Cantidad from "./Cantidad";
import RadioButtonMenu from "./RadioButtonMenu";
import Resultado from "./Resultado";

class App extends React.Component {
    state = {
        cantidad: 1,
        monedas: ["cobre", "plata", "oro", "platinio"],
        selectedIndex: 2
    };
    updateCantidad = cantidad => {
        this.setState({ cantidad: cantidad });
    };
    updateSelected = index => {
        this.setState({ selectedIndex: index });
    };
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row align-items-center justify-content-between">
                    <Cantidad
                        updateCantidad={this.updateCantidad}
                        cantidad={this.state.cantidad}
                    />
                    <RadioButtonMenu
                        monedas={this.state.monedas}
                        updateSelected={this.updateSelected}
                        selected={this.state.selectedIndex}
                    />
                    <Resultado {...this.state} />
                </div>
            </div>
        );
    }
}

export default App;
