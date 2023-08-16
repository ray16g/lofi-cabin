import { React, useState} from 'react'
import ReactPlayer from 'react-player/youtube'
import {add, music, pause, play, playlist, playNext, playPrev, volume1} from "../assets/icons"

const Footer = () => {

  const [config, setConfig] = useState({
    playing: true,
    volume: 0.5,
    played: 0,
    duration: 0,
    playedSeconds: 0,
  })

  function handleVolume(e) {
    setConfig({...config, volume: parseFloat(e.target.value)})
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
    console.log(progress)
  }

  function handleDuration(duration) {
    setConfig({...config, duration: duration})
  }

  function onPlayerReady(e) {
    e.player.player.player.setShuffle(true)
    e.player.player.player.nextVideo()
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
        onReady={onPlayerReady}
        onStart={() => console.log('onStart')}
        onPlay={handlePlay}
        onPause={handlePause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={e => console.log('onSeek', e)}
        onError={e => console.log('onError', e)}
        onProgress={handleProgress}
        onDuration={handleDuration}

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
          <img src={volume1} alt="Adjust audio" />
        </button>
        {config.played}
        <div className="volume-slider">
          <input 
            type="range" 
            min={0} 
            max={1.5} 
            step={0.02} 
            value={config.volume}
            onChange={handleVolume}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer