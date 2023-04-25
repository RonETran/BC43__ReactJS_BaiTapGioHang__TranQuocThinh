import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {prodInfo,addToCart,seeDetails} = this.props;

    return (
      <div className='card'>
        <img src={prodInfo.image} alt='...' />
        <div className='card-body'>
            <h3>{prodInfo.name}</h3>
            <p>{prodInfo.price}$</p>
            <button className='btn btn-dark py-2 px-3' onClick={()=>{addToCart(prodInfo)}}>
                Add to cart <i class="fa fa-cart-plus"></i>
            </button>
            <button className='btn btn-primary p-2 px-3 ms-2' data-bs-toggle="modal" data-bs-target="#modal-detail" onClick={()=>{seeDetails(prodInfo)}}>
                Detail <i class="fab fa-sistrix"></i>
            </button>
        </div>
      </div>
    )
  }
}
