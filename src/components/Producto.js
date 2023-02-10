import React, { Component } from 'react'
import Button from './Button'


export default class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props
        return (
            <div className='bg-white w-40 h-40 lg:w-60 lg:h-60 rounded-lg shadow-lg my-4'>
                <img className='mx-auto h-[calc(75%)]' src={producto.img} alt={producto.name} />
                <div className='relative bg-slate-200 p-2 rounded-b-lg'>
                    <h3 className='font-bold'>{producto.name}</h3>
                    <p>{producto.price}$</p>
                    <Button onClick={() => { agregarAlCarro(producto) }}>
                        <i className="fa-solid fa-plus"></i>
                    </Button>
                </div>
            </div>
        )
    }
}
