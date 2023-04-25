import React, { Component } from 'react'

export default class Header extends Component {
    render() {
      let {number} = this.props;
    return (
      <div className='bg-dark text-white p-3 position-fixed top-0 start-0 end-0 fixed'>
        <div className='container'>
        <a href='#' className='btn btn-primary text-white px-4 me-2'>Shop</a>
        <a href='#' className='btn btn-light text-dark px-4 me-2' data-bs-toggle="modal" data-bs-target="#modal-cart">Cart ({number})</a>
        </div>
      </div>
    )
  }
}
