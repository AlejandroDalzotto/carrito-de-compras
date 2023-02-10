import React, { Component } from 'react'
import Producto from './Producto'

export default class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div className='w-full mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 lg:gap-0'>
                    {productos.map(producto => <Producto agregarAlCarro={agregarAlCarro} key={producto.name} producto={producto} />)}
                </div>
            </div>
        )
    }
}
