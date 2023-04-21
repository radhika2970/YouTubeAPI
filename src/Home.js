import React, {useState } from 'react';
import {Container} from 'react-bootstrap';
import CategoriesBar from './CategoriesBar';
import data from './data.json'
import {MdNotifications, MdApps} from 'react-icons/md';
import './Header.scss'
import Child from './Child';

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayVideos, setDisplayVideos] = useState([...data.videos]);

  const searchvideos = (keyword) => {
    setSearchTerm(keyword)
    const filteredVideos =  data.videos.filter((value) =>{ 
      if (searchTerm===""){
        return value;
      }
      else if (value.channel_name.toLowerCase().includes(searchTerm.toLowerCase())){
      return value;}
    })
    setDisplayVideos(filteredVideos);
  }
  return (
    <Container>
      <div className='border border-dark header'>
      <form >
        <input type="text" placeholder='Search' onChange={(event) => {searchvideos(event.target.value)}} /> 
      </form>
      <div className='header_icons'>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img 
        src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
        alt=''
        />
      </div>
    </div>
        <CategoriesBar/>
        {/* <Child/> */}     
    </Container>
  )
}

export default Home