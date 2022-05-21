import React, {Component} from 'react';
import '../styling/Nav.css';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  };
  
  handleChange = (event) => {
    this.setState({userInput: event.target.value})
  };

  submitSearch = (event) => {
    event.preventDefault()
    const newSearch = this.state.userInput
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join(" ")
    this.props.searchMovies(newSearch)
  };

  clearSearch = (event) => {
    event.preventDefault()
    this.setState({userInput: ''})
    this.props.searchMovies('')
  };

  render = () => {
    return (
      <form>
        <input
          className='searchBar'
          type='text'
          placeholder='search movie titles'
          name='search'
          value={this.state.userInput}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitSearch(event)} >Search</button>
        {this.state.userInput && <button onClick={event => this.clearSearch(event)}>Clear Search</button>}
      </form>
    )
  };
};

 export default Nav;
