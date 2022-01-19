import React, {Component} from 'react';
import Navbar from './Navbar';
import Item from './Item';

export default class HomePage extends Component {
    render() {
      return(
        <div className="HomePage">
          Homepage
          <Item/>
        </div>
      );
    }
  }