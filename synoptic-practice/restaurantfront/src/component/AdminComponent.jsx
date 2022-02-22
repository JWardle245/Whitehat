import React, { Component, useState } from 'react'
import ItemDataService from '../service/ItemDataService.js';

class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            editMode: -1, // -1 is a number that will never be assigned to an ID, so I am using it to represent nothing being edited
            nameInput: "",
            priceInput: ""
        }
        this.refreshItems = this.refreshItems.bind(this);
        this.updateEditMode = this.updateEditMode.bind(this);
        this._saveItem = this._saveItem.bind(this);
        this._deleteItem = this._deleteItem.bind(this);
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
    
    updateEditMode(id, name, price) {
        this.setState(() => {
            return {editMode: id, nameInput: name, priceInput: price}
          });
    }

    updateNameInput(evt) {
        const val = evt.target.value;
        this.setState({
          nameInput: val
        });
      }

      updatePriceInput(evt) {
        const val = evt.target.value;
        this.setState({
          priceInput: val
        });
      }

    _saveItem = async (id) => {
        await ItemDataService.saveItem(id, this.state.nameInput, this.state.priceInput);
        this.setState(() => {
            return {editMode: -1}
        });
        this.refreshItems();
      }

    _deleteItem = async (id) => {
        await ItemDataService.deleteItem(id);
        this.setState(() => {
            return {editMode: -1}
        });
        this.refreshItems();
    }

    render() {
        
        console.log('render')
        return (
            <div className="container">
                <h3>All Items</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price (£)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>
                                                {this.state.editMode != item.id && <div>{item.name}</div>}
                                                {this.state.editMode == item.id && <div><input name="itemName" placeholder={item.name} value={this.state.nameInput} onChange={evt => this.updateNameInput(evt)}/></div>}
                                            </td>
                                            <td>
                                                {this.state.editMode != item.id && <div>{item.price}</div>}
                                                {this.state.editMode == item.id && <div><input name="itemPrice" placeholder={item.price} value={this.state.priceInput} onChange={evt => this.updatePriceInput(evt)}/></div>}
                                            </td>
                                            <td>
                                                {this.state.editMode != item.id && <div></div>}
                                                {this.state.editMode == item.id && <div><button onClick={() => { this._saveItem(item.id);}}>Save</button></div>}
                                            </td>
                                            <td>
                                                {this.state.editMode != item.id && <div><button onClick={() => { this.updateEditMode(item.id, item.name, item.price);}}>Edit</button></div>}
                                                {this.state.editMode == item.id && <div><button onClick={() => {this.updateEditMode(-1);}}>Cancel</button></div>}
                                            </td>
                                            <td>{this.state.editMode != item.id && <button onClick={() => {this._deleteItem(item.id);}}>Delete</button>}
                                                {this.state.editMode == item.id && <div></div>}</td>
                                        </tr>
                                )
                            }
                            {this.state.editMode != -2 && // -2 is a number that will never be assigned as an ID, so I am using it to represent adding a new item
                            <tr>
                                <td>
                                    {this.state.editMode != -2 && <div><button onClick={() => { this.updateEditMode(-2, "", "");}}>Add Item</button></div>}
                                </td>
                            </tr>}
                            {this.state.editMode == -2 && 
                            <tr>
                                <td>
                                    {this.state.editMode == -2 && <div><button onClick={() => {this.updateEditMode(-1);}}>Cancel</button></div>}
                                </td>
                                <td>
                                    <input name="itemName" placeholder="Name" value={this.state.nameInput} onChange={evt => this.updateNameInput(evt)}/>
                                </td>
                                <td>
                                    <input name="itemPrice" placeholder="Price (£)" value={this.state.priceInput} onChange={evt => this.updatePriceInput(evt)}/>
                                </td>
                                <td>
                                    {this.state.editMode == -2 && <div><button onClick={() => { this._saveItem(-2);}}>Save</button></div>}
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AdminComponent