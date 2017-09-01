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
      <div>
        <input onChange={event => this.setState({term: event.target.value})} />
      </div>
    )
  }
}

export default SearchBar
