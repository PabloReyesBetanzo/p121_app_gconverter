import React from "react";

class RadioButton extends React.Component {
    handleChange = e => {
        this.props.handleButtonChange(this.props.index);
    };
    render() {
        let checked = this.props.selected === this.props.index ? true : false;
        return (
            <label className="radioButtonItem">
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.index}
                    onChange={this.handleChange}
                    checked={checked}
                />
                {this.props.label}
            </label>
        );
    }
}

export default RadioButton;
