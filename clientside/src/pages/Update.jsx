import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [book,setBook ] = useState({
    title: '',
    desc : '',
    price : null,
    img : '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2]

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
      await axios.put('http://localhost:8080/books/'+bookId ,book);
      navigate('/');
    }
    catch(err){
      console.log(err);
    }
  }

  

  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <textarea type="text" placeholder='description' onChange={handleChange} name='desc' style={{'outline':'none', 'height' : '84px'}}/>
      <input type="number" placeholder='price' onChange={handleChange} name='price'/>
      <input type="img" placeholder='cover' onChange={handleChange} name='img'/>
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update

