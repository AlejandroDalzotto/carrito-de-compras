import React, { Component } from 'react'
import Carro from './Carro'

export default class Navbar extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        return (
            <nav className='relative bg-gray-300 px-5 py-3 sm:px-10 flex justify-between items-center'>
                <h1 className='text-slate-900 font-bold text-4xl'>Shop</h1>
                <Carro carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={mostrarCarro} />
            </nav>
        )
    }
}
