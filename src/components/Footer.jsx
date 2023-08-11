import { React, useState} from 'react'
import ReactPlayer from 'react-player/youtube'
import {add, music, pause, play, playlist, playNext, playPrev} from "../assets/icons"

const Footer = () => {

  const [config, setConfig] = useState({
    playing: true,
    volume: 1,
    played: 0,
    playedSeconds: 0
  })

  function handleVolume(e) {

  }

  function handlePlay() {
    setConfig({...config, playing: true})
  }

  function handlePause() {
    setConfig({...config, playing: false})
  }

  function handleSeekUp(e) {

  }

  function handleSeekDown(e) {

  }

  function handleSeek(e) {

  }

  function handleProgress(progress) {

  }

  function handleDuration(duration) {

  }

  function onPlayerReady(e) {
    console.log(e)
    e.target.setShuffle(true)
    e.target.nextVideo()
    e.target.playVideo()
  }

  return (
    <div className='footer'>
      <ReactPlayer
        className='react-player'
        width='0'
        height='0'
        url={"https://www.youtube.com/playlist?list=PLofht4PTcKYnaH8w5olJCI-wUVxuoMHqM"}
        pip={false}
        playing={config.playing}
        controls={true}
        light={false}
        loop={false}
        playbackRate={1}
        volume={config.volume}
        muted={false}
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onPlay={handlePlay}
        onPause={handlePause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={e => console.log('onSeek', e)}
        onError={e => console.log('onError', e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
        config={{
          youtube: {
            embedOptions: {
              events: {
                'onReady' : onPlayerReady
              }
            }
          }
        }}
      />
      <div className="background-player">
        Ambience
        <button>
          <img src={playlist} alt="Ambience playlist" />
        </button>
      </div>
      <div className="main-player">
        <button>
          <img src={playPrev} alt="Play previous" />
        </button>
        <button>
          <img src={pause} alt="Pause" />
        </button>
        <button>
          <img src={playNext} alt="Play next" />
        </button>
        <div className="slider"></div>
        <button>
          <img src={music} alt="Adjust audio" />
        </button>
        <div className="volume-slider">
          <input 
            type="range" 
            min={0} 
            max={0.999999} 
            step='any' 
            value={config.played}
            // onMouseDown={}
            // onChange={}
            // onMouseUp={}          
          />
        </div>
      </div>
    </div>
  )
}

export default Footer