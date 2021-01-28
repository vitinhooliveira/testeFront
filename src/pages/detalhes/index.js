import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

export default class Detalhes extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/id/${id}/info`);
    console.log(response);
    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        <img
          className="imagem"
          src={products.download_url}
          width="700"
          height="600"
        ></img>
        <Typography align="center" variant="h4">
          Nome do Autor: {products.author}
        </Typography>
        <Typography align="center" variant="h4">
          ID da Imagem : {products.id}
        </Typography>

        <Link to={`/`}>
          <HomeIcon className="home" />
        </Link>
      </div>
    );
  }
}
