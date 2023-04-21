import React from 'react';
import './Sidebar.scss';
import {Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Sidebar = ({sidebar}) => {
  return (
    <nav className={sidebar ? "sidebar open": "sidebar"}>
     {SidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
    </nav>
  )
}

export default Sidebar