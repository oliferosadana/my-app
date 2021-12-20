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
      menuMinuman: [
        { id: 1, nama: 'Juice Melon', harga: 15000 },
        { id: 2, nama: 'Milkshake Strawberry', harga: 20000 },
        { id: 3, nama: 'Juice Tomat', harga: 15000 },
        { id: 4, nama: 'Juice Mangga', harga: 15000 },
        { id: 5, nama: 'Juice Alpukat', harga: 15000 },
      ],
      namaPembeli: '',
      keterangan: '',
      jenisPembayaran: ''
    }
  }

  handleGantiNama = () => {
    this.setState({namaResto: 'Programmer'})
  }

  // handleCahangeNamaPembeli = (event) => {
  //   this.setState({ namaPembeli : event.target.value })
  // }

  // handleChangeKeterangan = (event) => {
  //   this.setState({ keterangan : event.target.value })
  // }

  // handleChangeJenisPembayaran = (event) => {
  //   this.setState({ jenisPembayaran : event.target.value })
  // }

  handleChange = (event) => {
    var name  = event.target.name
    var value = event.target.value
    this.setState({ [name] : value })
  }

  render() {
    return (
      <div className="App">
        <h1>Cafe and Resto {this.state.namaResto}</h1>
          <button onClick={this.handleGantiNama} className='btn btn-primary'>Ganti Nama Resto</button>

          <div className="row" style={{marginTop: '10px'}}>
              <div className="col-md-4 offset-md-4">
                  <form>
                      <div className="form-group">
                          <label>Nama Pembeli:  </label>
                          <input onChange={this.handleChange} value={this.state.namaPembeli} className="form-control" name="namaPembeli" />
                          <small>nama pembeli: {this.state.namaPembeli}</small>
                      </div>
                  </form>
                  <br />
                  <label>Keterangan:  </label>
                    <textarea className="form-control" name="keterangan" onChange={this.handleChange} value={this.state.keterangan}/>
                  <small>Keterangan: {this.state.keterangan}</small>
                  <br />
                  <label>Jenis Pembayaran:</label>
                  <select className="form-control" name="jenisPembayaran" value={this.state.jenisPembayaran} onChange={this.handleChange}>
                      <option value="cash">Cash</option>
                      <option value="kartuKredit">Kartu Kredit</option>
                      <option value="voucher">Voucher</option>
                  </select>
                  <small>Jenis Pembayaran: {this.state.jenisPembayaran}</small>
              </div>
          </div>

          

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
        { this.state.menuMinuman.map((menu, index) => 
          <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga}/>
        )}
      </div>
    );
  }
}

export default App;
