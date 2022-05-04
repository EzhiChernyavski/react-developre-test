import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import query from "./queryCategory";
import { NavLink } from "react-router-dom";
import navbar from "./Navbar.module.css";
import logo from "./a-logo.svg";
import cart from "./EmptyCart.svg";
import { Currency } from "./currency/Currency";

export class Navbar extends Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error!: ${error}`;
          return (
            <nav className={navbar.nav}>
              <div className={navbar["navLink-wrapper"]}>
                {data.categories.map(({ name }) => (
                  <NavLink
                    to={`/${name}`}
                    key={name}
                    className={(navActive) =>
                      navActive.isActive ? navbar.active : ""
                    }
                  >{`${name}`}</NavLink>
                ))}
              </div>
              <img src={logo} alt="logo"></img>
              <div className={navbar.cart}>
                <Currency />
                <div className={navbar["cart-logo__wrapper"]}>
                  <img src={cart} alt="cart"></img>
                </div>
              </div>
            </nav>
          );
        }}
      </Query>
    );
  }
}