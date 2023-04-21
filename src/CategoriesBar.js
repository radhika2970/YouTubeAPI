import React ,{useState} from 'react';
import './CategoriesBar.scss';

const keywords = ['All', 'Music', 'Guitar', 'Coding', 'Football', 'Cricket', 'Redux', 'React js', 'Javascript', 'HTML', 'CSS', 'Bootstrap'];

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState('All');
  const handleClick = value => {
    setActiveElement(value)
  }
  return (
    <div className='categoriesBar'>
      {
        keywords.map((value,i)=> (
        <span 
        onClick={() => handleClick(value)}
        key={i}
        className = {activeElement === value ? 'active' : ''}
        > {value} </span>
        ))
      }
    </div>
  )
}

export default CategoriesBar