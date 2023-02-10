import React, { Component } from 'react'

export default class DetallesCarro extends Component {
    render() {
        const { carro } = this.props
        console.log("carro:::", carro)
        return (
            <div className='bg-slate-50 absolute z-10 mt-7 shadow-lg rounded w-60 right-5' data-aos='fade-up'>
                <ul className='max-h-52 overflow-auto scroll'>
                    {carro.map(x => <li key={x.name} className='flex justify-between items-center px-4 py-2'>
                        <img alt={x.name} src={x.img} width='40' height='24' />
                        <span>{x.name}</span>
                        <span>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}
