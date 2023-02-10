import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button className='absolute bottom-2 right-2 bg-slate-900 p-1 rounded font-bold text-slate-100 outline-none transition-all hover:bg-transparent hover:text-slate-900 border-2 border-slate-900 flex items-center ' {...this.props}></button>
        )
    }
}