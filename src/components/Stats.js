import React, { Component } from "react";
import { apiUrl } from "../config/const";
import Table from "./structural/Table";

class Stats extends Component {
  state = {
    loader: false,
    statsObject: null
  };
  componentDidMount() {
    this.setState({ loader: true });
    fetch(apiUrl + "get_data_stats", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ statsObject: res });
      })
      .then(res => {
        this.setState({ loader: false });
      });
  }

  render() {
    if (this.state.loader || this.state.statsObject == null) {
      return <p>Hi</p>;
    } else {
      return (
        <React.Fragment>
          <div>Training Data Stats</div>
          <Table
            header={this.state.statsObject.training_data.header}
            data={this.state.statsObject.training_data.stats}
            header_mapping={this.state.statsObject.training_data.header_mapping}
          />
          <div>Test Data Stats</div>
          <Table
            header={this.state.statsObject.test_data.header}
            data={this.state.statsObject.test_data.stats}
            header_mapping={this.state.statsObject.test_data.header_mapping}
          />
        </React.Fragment>
      );
    }
  }
}

export default Stats;
