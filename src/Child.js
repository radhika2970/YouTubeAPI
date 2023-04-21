import React, {useState } from 'react'
import {Col,  Row } from 'react-bootstrap';
import data from './data.json'
import Video from './Video';
import './Header.scss'

function Child() {
    const [displayVideos] = useState([...data.videos]);
return(
    <div>
      
       <Row>
        { 
          displayVideos.map((video) => {
        return<Col lg={3} md={4}><Video
        key={video.id}
        thumb_img={video.thumb_img}
         profile_img={video.profile_img}
          title={video.title}
           channel_name={video.channel_name}
            views={video.views}
             timestamps={video.timestamps}
              video_duration={video.video_duration}
              videoId = {video.videoId}
        /> </Col> 

      })}

</Row>
       
    </div>
  )
}

export default Child