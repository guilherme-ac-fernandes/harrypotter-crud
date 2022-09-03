import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HPContext from './HPContext';

function HPProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState('');
  const [loading, setLoading] = useState(true);
  const [updateList, setUpdateList] = useState(false); 
  
  useEffect(() => {
    setLoading(true);
    updateCharacters();
    setLoading(false);
  }, []);

  useEffect(() => {
    updateCharacters();
    setUpdateList(false);
  }, [updateList]);
  
  const updateCharacters = async () => {
    const URL = 'http://localhost:3001/character';
    const { data } = await axios.get(URL);
    setCharacters(data);
  };

  const contextValue = {
    loading,
    character,
    setCharacter,
    characters,
    setCharacters,
    setUpdateList,
  };

  return (
    <HPContext.Provider value={ contextValue }>
      {children}
    </HPContext.Provider>
  );
}

export default HPProvider;