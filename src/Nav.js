import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }

  render = () => {
    return (
      <nav>
        <label></label>
        <input
          type='text'
          placeholder='search movies'
          name='search'
          value={this.state.title}
        />
        <button>Search</button>
      </nav>
    )
  }
}

 export default Nav;