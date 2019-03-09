import React, { Component } from "react";
import axios from "axios";

export default class ItemTitle extends Component {
  constructor() {
    super();
    this.state = {
      itemId: 666,
      currentItem: {
        model: "loading",
        sku: "loading",
        title: "loading"
      }
    };
    this.handleGetRequest = this.handleGetRequest.bind(this);
  }

  componentDidMount() {
    this.handleGetRequest();
  }

  handleGetRequest() {
    const id = Math.floor(Math.random() * Math.floor(1000));
    axios
      .get(`http://localhost:5001/api/title/${id}`)
      .then(response => {
        this.setState({
          itemId: response.data.titleId,
          currentItem: response.data
        });
        console.log(this.state.currentItem);
      })
      .catch(err => console.error(err));
  }

  render() {
    const { model, sku, title } = this.state.currentItem;
    return (
      <div>
        <h1>{title}</h1>
        <p>
          <strong>Model: </strong>
          {model}
          <strong>SKU: </strong> {sku}
        </p>
        <button onClick={this.handleGetRequest}> do something </button>
      </div>
    );
  }
}
