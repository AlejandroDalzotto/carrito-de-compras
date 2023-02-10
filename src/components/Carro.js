import React, { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

export default class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span className='relative left-3 top-3'>
                    {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
                </span>
                <button onClick={mostrarCarro} className='bg-slate-900 text-slate-100 px-4 rounded font-bold transition-all lg:hover:text-slate-900 lg:hover:bg-transparent border-2 border-slate-900'>Carro</button>

                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}

            </div>
        )
    }
}
