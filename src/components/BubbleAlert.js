import React, { Component } from 'react'

export default class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) {
            return ''
        }
        return n > 9 ? '9+' : n
    }
    render() {
        const { value } = this.props
        return (
            <span className='bg-red-500 rounded-2xl text-slate-50 py-[2px] px-2 font-bold w-5'>{this.getNumber(value)}</span>
        )
    }
}
