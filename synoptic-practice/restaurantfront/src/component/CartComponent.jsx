import React, { Component } from 'react';
import CartDataService from '../service/CartDataService.js';
import ItemDataService from '../service/ItemDataService.js';

class CartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            qty: [],
            allItems: [],
            editMode: 0,
            deleted: -1
        }
        this.refreshCart = this.refreshCart.bind(this);
        this.updateEditMode = this.updateEditMode.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        this.refreshCart();
    }

    updateEditMode(mode) {
         this.setState(() => {
            return {editMode: mode}
          });
          if(mode == 0) {
              this.refreshCart();
          }
    }

     addItem(id) {
        let inCart = 0;
        for(let i=0; i<this.state.items.length; i++) {
            if (id == this.state.items[i].id) {
                inCart = 1;
                let currentQty = this.state.qty;
                currentQty[i] += 1;
                this.setState(() => {
                    return {qty: currentQty}
                });
            }
        }
        if(inCart == 0) {
            for(let i=0; i<this.state.allItems.length; i++) {
                if (id == this.state.allItems[i].id) {
                    let currentItems = this.state.items;
                    let currentQty = this.state.qty;
                    currentItems.push(this.state.allItems[i]);
                    currentQty.push(1);
                    this.setState(() => {
                        return {items: currentItems, qty: currentQty}
                    });
                }
            }
        }
    }

    removeItem(id) {
        for(let i=0; i<this.state.items.length; i++) {
            if (id == this.state.items[i].id) {
                let currentQty = this.state.qty;
                if(currentQty[i] == 1) {
                    let currentItems = this.state.items;
                    currentItems.splice(i, 1);
                    currentQty.splice(i, 1);
                    this.setState(() => {
                        return {items: currentItems, qty: currentQty}
                    });
                }
                else {
                    currentQty[i] -= 1;
                    this.setState(() => {
                        return {qty: currentQty}
                    });
                }
            }
        }
    }

    saveCart() {
        let itemIDs = [];
        this.state.items.map(
            item => {
                itemIDs.push(item.id);
            }
        )
        CartDataService.updateCart(1, itemIDs, this.state.qty);
        this.setState(() => {
            return {editMode: 0, deleted: -1}
          });
    }

    refreshCart() { // 1/5 Error: Try making this async?
        ItemDataService.retrieveAllItems()
            .then(
                response => {
                    this.setState({ allItems: response.data })
                }
            )
        let tempItems = [];
        CartDataService.retrieveCart(1)
            .then(
                response => {
                    response.data.items.map(
                        id => {
                            let deleted = true;
                            this.state.allItems.map(
                                foodItem => {
                                    if(foodItem.id == id) { // 1/5 Error: This (at least) is being skipped
                                        tempItems.push(foodItem);
                                        deleted = false;
                                    }
                                }
                            )
                            if(deleted) { // Checking for items in the cart that have been deleted by the admin
                                this.setState(() => {
                                    return {deleted: response.data.items.indexOf(id)}
                                  });
                            }
                        }
                    )
                    let qty = response.data.qty;
                    
                    if (this.state.deleted != -1) {
                        qty.splice(qty[this.state.deleted], 1);
                        this.setState(() => {
                            return {editMode: 1}
                          });
                    }

                    this.setState({
                        items: tempItems,
                        qty: qty
                    })

                    
                }
            )
    }
    
    render () {
        return (
        <aside className="col-1">
            <h2 style={{"display":"inline"}}>Cart</h2>
            {this.state.editMode == 0 && <button onClick={() => { this.updateEditMode(1);}} className="buttonCart">Edit</button>}
            {this.state.editMode == 1 && <button onClick={() => { this.updateEditMode(0);}} className="buttonCart">Cancel</button>}
            <div>
                {this.state.items.length == 0 && <div>Cart is empty. If you did not expect this, try refreshing the page.</div>}
                {this.state.items.length != 0 && <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price (Each)</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>£{item.price}</td>
                                            {this.state.editMode == 0 && <td>{this.state.qty[this.state.items.indexOf(item)]}</td>}
                                            {this.state.editMode == 1 && <td>
                                            <button onClick={() => { this.removeItem(item.id);}}>-</button>
                                            {this.state.qty[this.state.items.indexOf(item)]}
                                            <button onClick={() => { this.addItem(item.id);}}>+</button>
                                            </td>}
                                        </tr>
                                )
                            }
                            {this.state.editMode == 0 && <tr><td/><td/><button className='buttonCart'>Checkout</button></tr>}
                        </tbody>
                    </table>
                    </div>}
                    {this.state.deleted != -1 && <div>One or more item(s) has been deleted since your last visit. Please click 'Save' to save these changes.</div>}
                    {this.state.editMode == 1 && <button onClick={() => { this.saveCart();}}>Save</button>}
            </div>
        </aside>
        )
    }
}

export default CartComponent