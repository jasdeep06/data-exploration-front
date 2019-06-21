import React, { Component } from "react";

class ImageOptions extends Component {
  state = {
    number_of_images: "5",
    size: "default"
  };
  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
    this.props.handleImageOptionsChange(name, value);
  };
  render() {
    return (
      <React.Fragment>
        <select onChange={this.handleInputChange} name="number_of_images">
          <option value="5" selected>
            5
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <input
          type="text"
          defaultValue="default"
          onChange={this.handleInputChange}
          name="size"
          placeholder="height,width"
        />
      </React.Fragment>
    );
  }
}

export default ImageOptions;
