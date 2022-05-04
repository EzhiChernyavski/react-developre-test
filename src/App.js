import { Component } from 'react';
import './App.css';
import { ProductList } from './page/ProductList';



class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <ProductList />
      </div>
    );
  }
}


export default App;
