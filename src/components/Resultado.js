import React from "react";
import { InputText } from "primereact/inputtext";
import numeral from "numeral";

class Resultado extends React.Component {
    currToPeso = {
        cobre: 100,
        plata: 1000,
        oro: 10000,
        platinio: 100000
    };
    render() {
        let value = numeral(
            this.props.cantidad *
                this.currToPeso[this.props.monedas[this.props.selectedIndex]]
        );
        return (
            <div className="col-4">
                <label htmlFor="resultado">Resultado</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">CLP$</span>
                    <InputText
                        id="resultado"
                        readOnly="true"
                        value={value.format()}
                    />
                </div>
            </div>
        );
    }
}

export default Resultado;
