import React, { Component } from "react";
import { apiUrl } from "../config/const";
import Loader from "react-loader-spinner";

class ImageSet extends Component {
  state = {
    loader: "false",
    images: null,
    labels: null
  };

  componentDidMount() {
    this.sendImageRequest();
  }

  componentDidUpdate(prevProps) {
    if (this.props.number_of_images !== prevProps.number_of_images) {
      this.sendImageRequest();
    }
  }
  sendImageRequest() {
    let url = null;
    if (this.props.data_type === "training") {
      url = apiUrl + "get_training_images";
    } else {
      url = apiUrl + "get_test_images";
    }

    this.setState({ loader: true });
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ number_of_images: this.props.number_of_images })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ images: res["images"], labels: res["labels"] });
      })
      .then(res => {
        this.setState({ loader: false });
      });
  }
  handleReloadImages = e => {
    e.preventDefault();
    this.sendImageRequest();
  };

  render() {
    const height =
      this.props.size === "default" ? "" : this.props.size.split(",")[0];
    const width =
      this.props.size === "default" ? "" : this.props.size.split(",")[1];

    if (this.state.loader || this.state.images == null) {
      return (
        <React.Fragment>
          {this.props.data_type == "training" ? (
            <div>Training Data Examples</div>
          ) : (
            <div>Test Data Examples</div>
          )}
          <Loader type="Bars" color="#somecolor" height={80} width={80} />;
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {this.props.data_type == "training" ? (
            <div>Training Data Examples</div>
          ) : (
            <div>Test Data Examples</div>
          )}
          <button type="button" onClick={this.handleReloadImages}>
            Reload
          </button>
          {this.state.labels.map(label => {
            return (
              <div>
                <div>{label}</div>
                {this.state.images[label].map(image => {
                  return (
                    <img
                      height={height}
                      width={width}
                      src={"data:image/png;base64, " + image}
                    />
                  );
                })}
              </div>
            );
          })}
        </React.Fragment>
      );
    }
  }
}

export default ImageSet;
