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
      })
      .catch(err => console.error(err));
  }

  render() {
    const { model, sku, title } = this.state.currentItem;
    return (
      <div className={"container"}>
        <div className={"wrapper"}>
          <h1 className={"heading"}>{title}</h1>
          <div className={"product-info-container"}>
            <span className={"product-data"}>
              <strong>Model</strong> :
            </span>
            <span className={"product-data"}>{model}</span>
            <span className={"product-data"}>
              <strong>SKU</strong> :
            </span>
            <span className={"product-data"}>{sku}</span>
          </div>
        </div>
      </div>
    );
  }
}
