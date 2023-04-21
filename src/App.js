import React, {useState, useEffect}  from 'react';
import './App.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoriesBar from './CategoriesBar';


/*import WatchScreen from './WatchScreen';*/


  const App = () => {
let api_key = "AIzaSyB3Qc-_-0b7wA3qxkHBAZ3AK_qdGTiuh2E";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResult: 10,
    regionCode: 'IN'
}))

.then(res=> res.json())
.then(data => {
    data.items.forEach(item => {
      getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(channel_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    id: video_data.snippet.channelId
}))

.then(res=> res.json())
.then(data => {
  video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
  makeVideoCard(video_data);
})
}

const getVideoStats = (video_data) => {
  fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'statistics',
    id: video_data.id
  }))
  .then(res => res.json())
  .then(data => {
    video_data.viewCount = data.items[0].statistics.viewCount;
    makeVideoCard(video_data);
  })
}

const makeVideoCard = (data) => {
  const videoCardContainer = document.querySelector('.videoCardContainer');
  const videoUrl = `https://www.youtube.com/watch?v=${data.id}`;
  const videoEmbedUrl = `https://www.youtube.com/embed/${data.id}`;
  
  const videoCard = document.createElement('div');
  videoCard.classList.add('video');
  videoCard.addEventListener('click', () => window.location.href = videoUrl);

  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = data.snippet.thumbnails.high.url;
  thumbnailImg.classList.add('thumbnail');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  const channelIconImg = document.createElement('img');
  channelIconImg.src = data.channelThumbnail;
  channelIconImg.classList.add('channel-icon');

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');

  const titleH6 = document.createElement('h6');
  titleH6.classList.add('title');
  titleH6.textContent = data.snippet.title;

  const channelNameP = document.createElement('p');
  channelNameP.classList.add('channel-name');
  channelNameP.textContent = data.snippet.channelTitle;

  const viewCountP = document.createElement('p');
  viewCountP.classList.add('view-count');
  viewCountP.textContent = `${data.viewCount} views`;

  infoDiv.appendChild(titleH6);
  infoDiv.appendChild(channelNameP);
  contentDiv.appendChild(channelIconImg);
  infoDiv.appendChild(viewCountP);
  contentDiv.appendChild(infoDiv);
  videoCard.appendChild(thumbnailImg);
  videoCard.appendChild(contentDiv);

  {/*const videoPlayer = document.createElement('iframe');
  videoPlayer.src = videoEmbedUrl;
  videoPlayer.width = '100%';
  videoPlayer.height = '150';
  videoPlayer.allowFullScreen = true;

videoCard.appendChild(videoPlayer); */}

  videoCardContainer.appendChild(videoCard);
}


  return (
    <>
   
    <div className='app_container'>
      <Router>
      <Sidebar />
      
      <Container fluid className="app_main">
      <Header/>
      <CategoriesBar/>
      <Container className='videoCardContainer'>

      </Container>
      </Container>
      </Router>
    </div>
    </>  
  );
  }


export default App;
