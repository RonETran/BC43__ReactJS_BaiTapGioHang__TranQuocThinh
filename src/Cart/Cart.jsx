import React, { Component } from 'react'

export default class Cart extends Component {

    renderCart = (cart) => {
      let {removeFromCart,quantityChange} = this.props;
        return cart.map((item,index)=>{
            return (<tr key={index}>
                <td style={{lineHeight:'70px'}}>{item.id}</td>
                <td style={{lineHeight:'70px'}}><img src={item.image} alt='' width={70} height={70} /></td>
                <td style={{lineHeight:'70px'}}>{item.name}</td>
                <td style={{lineHeight:'70px'}}> <button className='btn btn-primary w-38 h-38' onClick={()=>{quantityChange(item.id,true)}}>+</button> {item.num} <button className='btn btn-primary w-38 h-38' id='minus' onClick={()=>{quantityChange(item.id,false)}}>-</button> </td>
                <td style={{lineHeight:'70px'}}>{item.price}$</td>
                <td style={{lineHeight:'70px'}}>{item.num * item.price}$</td>
                <td style={{lineHeight:'70px'}}><button className='btn btn-danger' onClick={()=>{removeFromCart(item.id)}}>Xóa</button></td>
            </tr>)
        })
    }

  render() {
    let {cart} = this.props;
    let bill = this.props.cart.reduce((total,prodCart)=>{
      return total += prodCart.num * prodCart.price
    },0)
    return (
        <div className="modal fade" id="modal-cart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className='table'>
                <thead className='bg-warning-subtle'>
                    <tr>
                        <td>Mã</td>
                        <td>Hình ảnh</td>
                        <td>Tên</td>
                        <td>Số lượng</td>
                        <td>Đơn giá</td>
                        <td>Thành tiền</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCart(cart)}
                </tbody>
                <tfoot className='bg-success-subtle'>
                  <tr>
                    <td colSpan={5}>Tổng tiền</td>
                    <td colSpan={2}>{bill}$</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
