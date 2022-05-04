import { gql } from "@apollo/client";


const categoriesList = gql`
query {
  categories{
    name
  }, currencies {
    label, symbol
  }
}
`

export default categoriesList;