import React, {useState, useRef,useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControl from './PlayerControl'

function Player(props) {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if(isPlaying){
      audioEl.current.play();
    }
    else{
      audioEl.current.pause();
    }
  })

  const skipSong = (foward = true) => {
    if(foward){
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp ++;

        if(temp > props.songs.length - 1){
          temp = 0;
        }

        return temp;
      })
    }
    else {
        props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp --;

        if(temp < 0){
          temp = props.songs.length - 1;
        }
        
        return temp;
      })
    }
  }


  return (
    <div className="c-player">
      <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <h4 className="c-playing-information">PLAYING NOW</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControl skipSong={skipSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      <p className="c-playing-information" ><strong>Next Song : </strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
    </div>
  )
}
 
export default Player ;
