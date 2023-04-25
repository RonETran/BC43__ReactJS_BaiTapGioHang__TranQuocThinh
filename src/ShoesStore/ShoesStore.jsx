import React, { Component } from 'react'
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'
import Cart from '../Cart/Cart'
import Detail from '../Detail/Detail'

export default class ShoesStore extends Component {

    state = {
        cart:[],
        detail:{}
    }

    addToCart = (prodClick) => {
        prodClick = {...prodClick,num:1};
        let prods = this.state.cart;
        let prodCart = prods.find(prod => prod.id === prodClick.id);
        if(prodCart){
            prodCart.num += 1;
        }else {
            prods.push(prodClick);
        }
        this.setState({
            cart: prods
        })
    }

    removeFromCart = (id) => {
      let index = this.state.cart.findIndex(prod => prod.id === id);
      if(index !== -1) {
          this.state.cart.splice(index,1);
      }
      this.setState({
          cart: this.state.cart
      })
  }


  quantityChange = (id,change)=>{
    let prodCart = this.state.cart.find(prod => prod.id === id);
    if(change){
        prodCart.num += 1;
    }else{
      if(prodCart.num>1){
        prodCart.num -= 1;
      }
    }
    this.setState({
        cart: this.state.cart
    })
  }


  seeDetails = (prodClick) => {
    this.setState({
        detail : prodClick
    })
  }



  render() {
    let total = this.state.cart.reduce((tot,item)=>{
        return tot += item.num;
    },0)
    return (
      <div>
        <Header number={total}/>
        <ProductList addToCart={this.addToCart} seeDetails={this.seeDetails}/>
        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} quantityChange={this.quantityChange}/>
        <Detail detail={this.state.detail}/>
      </div>
    )
  }
}
