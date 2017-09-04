import React from 'react'

const VideoDetail = ({video}) => {
  //check if video prop is provided, if not render "loading"
  if (!video) {
    return <div>Loading...</div>
  }

  //if prop is provided, render the video and information details
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>

  )

}

export default VideoDetail
