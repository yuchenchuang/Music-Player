import React from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControl from './PlayerControl'

function Player(props) {
  return (
    <div className="c-player">
      <audio src=""></audio>
      <h4 className="c-playing-information">PLAYING NOW</h4>
      <PlayerDetails song={props.song} />
      <PlayerControl />
      <p className="c-playing-information" ><strong>Next Song : </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}
 
export default Player ;
