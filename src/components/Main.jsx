import React from 'react'

const Main = ({title, href}) => {
  return (
    <div className='main-container'>
      <img src="https://64.media.tumblr.com/336fe798e511bf27879d32e0622499af/82865fe794f758c3-7e/s1280x1920/cb83ff9034c7a65a11e8762e014307cf6a5cfe2b.gifv" alt="" />

      {title ? 
      <a className="title" target="_blank" rel="noopener noreferrer" href={href} >{title}</a>
      :
      <div className="title">Loading...</div>
      }
    </div>
    
  )
}

export default Main