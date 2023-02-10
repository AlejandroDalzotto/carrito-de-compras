import React, { Component } from 'react'
import Productos from './components/Productos'
import Titulo from './components/Titulo'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 200, img: 'https://alejandrodalzotto.github.io/carrito-de-compras/productos/tomate.png' },
      { name: 'Lechuga', price: 120, img: 'https://alejandrodalzotto.github.io/carrito-de-compras/productos/lechuga.png' },
      { name: 'Papa', price: 250, img: 'https://alejandrodalzotto.github.io/carrito-de-compras/productos/papa.png' },
      { name: 'Cebolla', price: 180, img: 'https://alejandrodalzotto.github.io/carrito-de-compras/productos/cebolla.png' },
      { name: 'Choclo', price: 240, img: 'https://alejandrodalzotto.github.io/carrito-de-compras/productos/choclo.png' },
      { name: 'Arbeja', price: 100, img: 'https://alejandrodalzotto.github.io/carrito-de-compras/productos/arbeja.png' },
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name ? ({ ...x, cantidad: x.cantidad + 1 }) : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state
    return (
      <div>

        <Navbar mostrarCarro={this.mostrarCarro} esCarroVisible={esCarroVisible} carro={this.state.carro} />
        <div className='p-4 bg-transparent container mx-auto min-h-screen'>


          <Titulo></Titulo>

          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />

        </div>

      </div>
    )
  }
}


export default App;
