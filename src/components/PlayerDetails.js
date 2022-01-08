import React from 'react'

function PlayerDetails(props) {
  return (
    <div className="player-details">
      <img src={props.song.img_src} alt="song data" />
      <p>{props.song.artist}</p>
      <p>{props.song.title}</p>
    </div>
  )
}

export default PlayerDetails
