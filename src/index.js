import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyAVAUrozNSEUGAMxKy5cMDYJhlOc6-kM_I'


// Create a new component, it'll produce some HTML
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: ''}, (videos) => {
      this.setState({videos})
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

// Take this component's html and place in the DOM
ReactDOM.render(
  <App/>, document.querySelector('.container'))
