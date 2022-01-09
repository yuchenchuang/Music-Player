import React from 'react'

function PlayerDetails(props) {
  return (
    <div className="c-player-details">
      <div className="c-playing-img-wrapper">
        <img src={props.song.img_src} alt="song data" className="c-playing-img"/>      
      </div>
      <p className="c-playing-title" >{props.song.title}</p>
      <p className="c-playing-artist" >{props.song.artist}</p>
    </div>
  )
}

export default PlayerDetails
