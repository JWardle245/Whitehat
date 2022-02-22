import React from 'react';
import ListItemsComponent from './ListItemsComponent';
import CartComponent from './CartComponent';
import '../index.css';

export default function Basket(props) {

    return <div className="row">
                <ListItemsComponent/>
                <CartComponent/>
            </div>;
}