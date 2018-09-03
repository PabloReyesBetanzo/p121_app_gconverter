import React from "react";
import Strings from "../Utilities/Strings";

class RadioButton extends React.Component {
    handleChange = e => {
        this.props.handleButtonChange(this.props.index);
    };
    render() {
        let checked = this.props.selected === this.props.index ? true : false;
        return (
            <label className="radio_buttons-item">
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.index}
                    onChange={this.handleChange}
                    checked={checked}
                />
                <span>{Strings.uc_first(this.props.label)}</span>
            </label>
        );
    }
}

export default RadioButton;
