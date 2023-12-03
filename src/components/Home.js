import React from 'react'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addToHistory } from '../redux/action';
import './app.css'; 
const Home = () =>{ 
    const dispatch = useDispatch();
   const [searchItem, setSearchItem] = useState(''); 
   const navigate = useNavigate();

   const handleSearch = ()=> {  
    navigate(`/word-details/${searchItem}`)
    dispatch(addToHistory(searchItem));
   }
   return(
    <div className='Home-container'>
        <input
            type='text'
            placeholder='Search for words'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
        />
        <button onClick={handleSearch}>
            Search
        </button>
    </div>
   )
}; 

export default Home; 