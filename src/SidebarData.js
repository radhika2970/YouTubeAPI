import React from 'react';
import { MdSubscriptions, 
    MdExitToApp, 
    MdThumbUp, 
    MdHistory, 
    MdLibraryBooks, 
    MdHome, 
    MdSentimentDissatisfied } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <MdHome size={23}/>
  },
  {
    title: 'Subscription',
    path: '/subscription',
    icon: <MdSubscriptions size={23}/>,
    
  },
  {
    title: 'Liked Videos',
    path: '/liked videos',
    icon: <MdThumbUp size={23}/>,
    
  },
  {
    title: 'History',
    path: '/history',
    icon: <MdHistory size={23} />,
 
  },
  {
    title: 'Library',
    path: '/library',
    icon: <MdLibraryBooks size={23} />,
   
  },
  {
    title: 'I don\'t know',
    path: '/no idea',
    icon: <MdSentimentDissatisfied size={23} />,
    
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <MdExitToApp size={23} />,
  
  }
];