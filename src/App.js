import React, { Component } from 'react';
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      namaResto: 'Codepolitan',
      menuMakanan: [
        { nama: 'Ayam Bakar', harga: 25000, stock: 10 },
        { nama: 'Nasi Goreng', harga: 22000, stock: 0 },
      ],
      MenuMinuman: [
        { nama: 'Juice Melon',    harga: 15000 },
        { nama: 'Milkshake Strawberry', harga: 20000 },
        { nama: 'Juice Tomat',    harga: 15000 },
        { nama: 'Juice Mangga',   harga: 15000 },
        { nama: 'Juice Alpukat',  harga: 15000 },
      ]
    }
  }

  handleGantiNama = () => {
    this.setState({namaResto: 'Programmer'})
  }

  render() {
    return (
      <div className="App">
        <h1>Cafe and Resto {this.state.namaResto}</h1>
          <button onClick={this.handleGantiNama} className='btn btn-primary'>Ganti Nama Resto</button>
        <h2 className="header-menu">Menu Makanan</h2>
          <MenuMakanan 
            namaMenu={this.state.menuMakanan[0].nama} 
            hargaMenu={this.state.menuMakanan[0].harga} 
            stock={this.state.menuMakanan[0].stock}  
          />
          <MenuMakanan
            namaMenu={this.state.menuMakanan[1].nama} 
            hargaMenu={this.state.menuMakanan[1].harga} 
            stock={this.state.menuMakanan[1].stock}
          />
        <h2>Menu Minuman</h2>
          <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={"15.000"}/>
          <MenuMinuman namaMenu={"Milkshake Strawberry"} hargaMenu={"20.000"}/>
          <MenuMinuman namaMenu={"Juice Tomat"} hargaMenu={"15.000"}/>
          <MenuMinuman namaMenu={"Juice Mangga"} hargaMenu={"15.000"}/>
          <MenuMinuman namaMenu={"Juice Alpukat"} hargaMenu={"15.000"}/>
      </div>
    );
  }
}

export default App;
