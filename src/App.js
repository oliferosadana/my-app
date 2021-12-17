import React, { Component } from 'react';
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cafe and Resto Codepolitan</h1>
        <h2>Menu Makanan</h2>
          <MenuMakanan namaMenu={"Ayam Bakar 'props'"} hargaMenu={"Rp. 25.000 'props'"} />
          <MenuMakanan namaMenu={"Nasi Goreng 'props'"} hargaMenu={"Rp. 22.000 'props'"} />
        <h2>Menu Minuman</h2>
          <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={"15.000"}/>
          <MenuMinuman namaMenu={"Milkshake Strawberry"} hargaMenu={"20.000"}/>
      </div>
    );
  }
}

export default App;
