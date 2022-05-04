import { Component } from "react";
// import { Navbar } from "../components/Navbar/Navbar";
import NavbarCopy from "../components/Navbar/Navbar";
import productList from "./ProductList.module.css"


export class ProductList extends Component {
  render () {
    return (
      <div className={productList["main-wrappert"]}>
        <NavbarCopy />
      </div>
    )
  }
}