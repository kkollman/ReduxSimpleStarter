import React, { Component } from 'react'
//putting Component in curly braces assigns that object to a variable named the same

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
