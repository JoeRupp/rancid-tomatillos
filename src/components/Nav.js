import React, {Component} from 'react';
import '../styling/Nav.css';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    }

  }

  render = () => {
    return (
      <nav>
        <label></label>
        <input
          className='searchBar'
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