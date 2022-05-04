import { Component } from "react";
import currency from "./Currency.module.css";

export class Currency extends Component {
  render() {
    return (
      <div className={currency.wrapper}>
        <select
          className={currency["select-carruncy"]}
          value={this.props.state.value}
          onChange={this.props.change}
        >
          {this.props.data.currencies.map(({ label, symbol }) => (
            <option key={label} value={symbol}>{`${symbol} ${label}`}</option>
          ))}
        </select>
      </div>
    );
  }
}
