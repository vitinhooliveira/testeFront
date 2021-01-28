import React, { Component } from "react";
import api from "../../services/api";
import {
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles.css";
import InfoIcon from "@material-ui/icons/Info";

export default class Main extends Component {
  state = {
    products: [],
    page: 1,
    productInfo: {},
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/v2/list?page=${page}&limit=30`);
    console.log(response.data);
    this.setState({ products: response.data });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) {
      return;
    }

    const pageNumber = page - 1;
    this.setState({ page: pageNumber });
    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page } = this.state;

    const pageNumber = page + 1;
    this.setState({ page: pageNumber });
    this.loadProducts(pageNumber);
  };

  render() {
    const { page } = this.state;

    return (
      <div className="product-list">
        <GridList cellHeight={180} className="grid">
          {this.state.products.map((products) => (
            <GridListTile key={products.id}>
              <img src={products.download_url} width="200" height="200"></img>
              <GridListTileBar
                title={products.id}
                subtitle={<span> {products.author}</span>}
                actionIcon={
                  <Link to={`/products/${products.id}`}>
                    <InfoIcon className="button" />
                  </Link>
                }
              />
            </GridListTile>
          ))}
        </GridList>

        <Grid container spacing={1}>
          <Button
            className="pagesleft"
            variant="contained"
            disabled={page === 1}
            onClick={this.prevPage}
          >
            Anterior
          </Button>

          <Button
            className="pagesright"
            variant="contained"
            onClick={this.nextPage}
          >
            Próxima
          </Button>
        </Grid>
      </div>
    );
  }
}
