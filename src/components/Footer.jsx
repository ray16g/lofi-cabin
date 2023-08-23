import { React, useState, useRef, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import {add, music, pause, play, playlist, playNext, playPrev, volume0, volume1, volume2, volumex} from "../assets/icons"

const Footer = ({handleTitle}) => {

  const [config, setConfig] = useState({
    playing: false,
    seeking: false,
    volume: 0.5,
    played: 0,
    duration: 0,
    muted: false
  })

  useEffect(() => {
    setConfig({...config, playing: true})
  }, []);

  const playerRef = useRef(null);

  function toggleMuted() {
    setConfig({...config, muted: !config.muted})
  }

  function togglePlay() {
    setConfig({...config, playing: !config.playing})
  }

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
    setConfig({...config, seeking: false})
    playerRef.current.seekTo(parseFloat(e.target.value))
  }

  function handleSeekDown(e) {
    setConfig({...config, seeking: true})  
  }

  function handleSeek(e) {
    setConfig({...config, played: parseFloat(e.target.value)})
  }

  function handleProgress(progress) {
    if(!config.seeking)
    {
      setConfig({...config, played: progress.played})
    }
  }

  function handleDuration(duration) {
    setConfig({...config, duration: duration})
  }

  function onPlayerReady(e) {
    e.getInternalPlayer().setShuffle(true)
    e.getInternalPlayer().nextVideo()
    e.getInternalPlayer().playVideo()
  }

  function handlePrevious() {
    playerRef.current.getInternalPlayer().previousVideo()
  }

  function handleNext() {
    playerRef.current.getInternalPlayer().nextVideo()
  }

  function handleBuffer() {
    const player = playerRef.current.getInternalPlayer()
    handleTitle(player.getVideoData().title, player.getVideoUrl())
  }

  return (
    <div className='footer'>
      <ReactPlayer
        ref={playerRef}
        className='react-player'
        width='0'
        height='0'
        url={"https://www.youtube.com/playlist?list=PLofht4PTcKYnaH8w5olJCI-wUVxuoMHqM"}
        pip={false}
        playing={config.playing}
        controls={true}
        light={false}
        loop={true}
        playbackRate={1}
        volume={config.volume}
        muted={config.muted}
        onReady={onPlayerReady}
        onStart={() => console.log('onStart')}
        onPlay={handlePlay}
        onPause={handlePause}
        onBuffer={handleBuffer}
        onSeek={e => console.log('onSeek', e)}
        onError={e => console.log('onError', e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />

      <div className="main-player">
        <div className="media-player">
        <button onClick={handlePrevious}>
          <img src={playPrev} alt="Play previous" />
        </button>

        <button onClick={togglePlay}>
          {config.playing ? 
          <img src={pause} alt="Pause" />
          : 
          <img src={play} alt="Play" />
          }
        </button>

        <button onClick={handleNext}>
          <img src={playNext} alt="Play next" />
        </button>

        <div className="slider-container">
          <input 
              className='range-slider'
              type="range" 
              min={0} 
              max={0.9999} 
              step='any' 
              value={config.played}
              onChange={handleSeek}
              onMouseDown={handleSeekDown}
              onMouseUp={handleSeekUp}
              style={{"--range-progress" : `${(config.played)*100}%`}}
            />
        </div>
        </div>
        

        <div className='volume-container'>
          <button onClick={toggleMuted}>
            {config.muted ? 
            <img src={volumex} alt="Muted audio" />
            :
            <img src={config.volume < 0.1 ? volume0 : config.volume < 0.4 ? volume1 : volume2} alt="Adjust audio" />
            }
            
          </button>
          <input 
            className='volume-slider'
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