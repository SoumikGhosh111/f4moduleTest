// WordDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './app.css'; 

const WordDetails = () => {
  const { searchItem } = useParams();
  const [wordDetails, setWordDetails] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [phonetic, setPhonetic] = useState(null);
  const [noun, setNoun] = useState(null);
  const [verb, setVerb] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem}`);
        setWordDetails(response.data[0]); // Assuming the API returns an array

        if (response.data[0]?.phonetics && response.data[0].phonetics[0]?.audio) {
          setAudioUrl(response.data[0].phonetics[0].audio);
        }
        if (response.data[0]?.phonetic) {
          setPhonetic(response.data[0].phonetic);
        }

        if (response.data[0]?.meanings[0]?.definitions[0]?.definition) {
          setNoun(response.data[0].meanings[0].definitions[0].definition);
        }

        if (response.data[0]?.meanings[1]?.definitions[0]?.definition) {
          setVerb(response.data[0].meanings[1].definitions[0].definition);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [searchItem]);

  return (
    <div className='wordDetails'>
      <h2>{searchItem}</h2>
      <p>{phonetic}</p>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h3>noun</h3>
      <p>{noun}</p>
      <h3>verb</h3>
      <p>{verb}</p>
    </div>
  );
};

export default WordDetails;
