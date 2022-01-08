import React from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControl from './PlayerControl'

function Player(props) {
  return (
    <div className="player">
      <audio src=""></audio>
      <h4>{props.song.title}</h4>
      <PlayerDetails song={props.song} />
      <PlayerControl />
      <p><strong>Next Song : </strong>{props.nextSong.title} by {props.nextSong.artist}</p>

    </div>
  )
}
 
export default Player ;
