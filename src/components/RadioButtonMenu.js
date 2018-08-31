import React from "react";
import RadioButton from "./RadioButton";

class RadioButtonMenu extends React.Component {
    handleButtonChange = index => {
        this.props.updateSelected(index);
    };
    render() {
        return (
            <div className="radio_buttons">
                {this.props.monedas.map((val, index) => {
                    return (
                        <RadioButton
                            key={index}
                            index={index}
                            name="moneda"
                            label={this.props.monedas[index]}
                            handleButtonChange={this.handleButtonChange}
                            selected={this.props.selected}
                        />
                    );
                })}
            </div>
        );
    }
}

export default RadioButtonMenu;
