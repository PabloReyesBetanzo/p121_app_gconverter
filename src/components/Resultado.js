import React from "react";
import { InputText } from "primereact/inputtext";

class Resultado extends React.Component {
    render() {
        return (
            <div className="col-4">
                <label htmlFor="resultado">Resultado</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">CLP$</span>
                    <InputText
                        id="resultado"
                        readOnly="true"
                        value={this.props.resultado}
                    />
                </div>
            </div>
        );
    }
}

export default Resultado;
