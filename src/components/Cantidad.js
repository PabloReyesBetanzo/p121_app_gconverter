import React from "react";
import { InputText } from "primereact/inputtext";

class Cantidad extends React.Component {
    // Declarar una propiedad de la Instancia de Cantidad en vez de un método para tener acceso a "this"
    handleChange = e => {
        this.props.updateCantidad(e.target.value);
    };
    render() {
        return (
            <div className="col-4">
                <label htmlFor="cantidad">Cantidad</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">$</span>
                    <InputText
                        id="cantidad"
                        keyfilter="pnum"
                        value={this.props.cantidad}
                        onChange={this.handleChange}
                        placeholder="1.000"
                    />
                </div>
            </div>
        );
    }
}

export default Cantidad;
