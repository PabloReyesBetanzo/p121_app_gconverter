import React from "react";
import { InputText } from "primereact/inputtext";

class Resultado extends React.Component {
    currToPeso = {
        cobre: 1000,
        plata: 10000,
        oro: 100000,
        platinio: 1000000
    };
    render() {
        let value =
            this.props.cantidad *
            this.currToPeso[this.props.monedas[this.props.selectedIndex]];
        return (
            <div className="col-4">
                <label htmlFor="resultado">Resultado</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">CLP$</span>
                    <InputText id="resultado" readOnly="true" value={value} />
                </div>
            </div>
        );
    }
}

export default Resultado;
