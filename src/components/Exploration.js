import React, { Component } from "react";
import Stats from "./Stats";
import ImageSet from "./ImageSet";
import ImageOptions from "./ImageOptions";

class Exploration extends Component {
  state = {
    number_of_images: "5",
    size: "default"
  };
  handleImageOptionsChange = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        {/* <div style={{ backgroundColor: "red" }}>hi</div> */}
        <Stats />
        <ImageOptions
          handleImageOptionsChange={this.handleImageOptionsChange}
        />
        <ImageSet
          data_type="training"
          number_of_images={this.state.number_of_images}
          size={this.state.size}
        />
        <ImageSet
          data_type="test"
          number_of_images={this.state.number_of_images}
          size={this.state.size}
        />
      </React.Fragment>
    );
  }
}

export default Exploration;
