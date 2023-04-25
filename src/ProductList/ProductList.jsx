import React, { Component } from 'react';
import {arrProduct} from '../assets/data/data';
import ProductItem from '../ProductItem/ProductItem';

export default class ProductList extends Component {
    renderProduct = () => {
        let {addToCart,seeDetails} = this.props;
        let arrJSX = arrProduct.map((item) => {
            return <div className='col-xl-4 col-lg-6 col-12 mb-4' key={item.id}>
                <ProductItem addToCart={addToCart} seeDetails={seeDetails} prodInfo={item} />
            </div>
        });
        return arrJSX;
    }

    render() {
        return (
            <div className='container mt-70'>
                <h3 className='text-center display-4 mb-4'>Shoes Shop</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
