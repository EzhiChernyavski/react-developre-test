import { graphql } from "@apollo/client/react/hoc";
import { Component } from "react";
import currencyList from "./queryCurrency";
import { Currency } from "./Currency";

class CurrencyConteiner extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.data.currencies[0].symbol };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { data } = this.props;
    if (data.loading) return <p>Loading...</p>;
    if (data.error) return `Error!: ${data.error}`;
    return (
      <Currency
        state={this.state}
        data={this.props.data}
        change={this.onChange}
      />
    );
  }
}

export default graphql(currencyList)(CurrencyConteiner);
