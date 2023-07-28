import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [book,setBook ] = useState({
    title: '',
    desc : '',
    price : null,
    img : '',
  });

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setBook((prev )=> ({
      ...prev,
       [e.target.name] : e.target.value
      })
    );
  };



  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:8080/books',book);
      navigate('/');
    }
    catch(err){
      console.log(err);
    }
  }

  

  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <textarea type="text" placeholder='description' onChange={handleChange} name='desc' style={{'outline' : "none", 'height' : '85px'}}/>
      <input type="number" placeholder='price' onChange={handleChange} name='price'/>
      <input type="img" placeholder='img' onChange={handleChange} name='img'/>
      <button className='formButton' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
