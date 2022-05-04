import { gql } from "@apollo/client";


const currencyList = gql`
query {
  currencies {
    label, symbol
  }
}
`

export default currencyList;