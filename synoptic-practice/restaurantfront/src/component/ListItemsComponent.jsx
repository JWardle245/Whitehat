import React, { Component } from 'react';
import ItemDataService from '../service/ItemDataService.js';
import CartDataService from '../service/CartDataService.js';

class ListItemsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            message: null
        }
        this.refreshItems = this.refreshItems.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.refreshItems();
    }

    refreshItems() {
        ItemDataService.retrieveAllItems()
            .then(
                response => {
                    this.setState({ items: response.data })
                }
            )
    }

    addToCart(id, itemId) {
        CartDataService.retrieveCart(id).then(
            response => {
                let exists = false;
                for(let i=0; i<response.data.items.length; i++) {
                    if(response.data.items[i] == itemId) {
                        exists = true;
                    }
                }
                
                if(exists) {
                    alert(`Attention:
This item is already in your cart.
If you would like to increase the quantity in your cart click the 'Edit' button.`);
                }
                else {
                    let items = response.data.items;
                    items.push(itemId);
                    let qty = response.data.qty;
                    qty.push(1);
                    CartDataService.updateCart(id, items, qty);
                }
            }
        )
    }


    render() {
        console.log('render')
        return (
            <div className="col-2">
                <h3>All Items</h3>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td><p style={{"display": "inline"}}>£</p>{item.price}</td>
                                            <td style={{"width":"8rem"}}><button onClick={() => {this.addToCart(1, item.id)}}>Add to cart</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListItemsComponent
