import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import './Video.scss'




const Video = ({thumb_img, profile_img, title, channel_name, views, timestamps, video_duration, videoId }) => {


  return (
    <div className='video' >
      <div className='video_top'>
       {/*<img src={thumb_img} alt=""/>*/}
     
        {<iframe
        width="510"
        height="200"
        src= {`https://www.youtube.com/embed/${videoId}`}
        title="Youtube Player"

        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />}
        <span>{video_duration}</span>
      </div>
      <div className='video_title'>
      {title}
      </div>
      <div className='video_details'>
        <span>
          <AiFillEye />{views} •
        </span>
        <span>{timestamps}</span>
      </div>
      <div className='video_channel'>
        <img src={profile_img} 
        alt='' />
        <p>{channel_name}</p>
      </div>
      
    </div>
  )
}


export default Video