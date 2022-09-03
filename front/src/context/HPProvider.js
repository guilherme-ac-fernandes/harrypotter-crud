import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HPContext from './HPContext';

function HPProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState('');
  const [house, setHouse] = useState('Gryffindor');
  const [loading, setLoading] = useState(true);
  const [updateList, setUpdateList] = useState(false);
  const [charEdit, setCharEdit] = useState(0);
  
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
    character,
    setCharacter,
    house,
    setHouse,
    characters,
    setCharacters,
    loading,
    setUpdateList,
    charEdit,
    setCharEdit,
  };

  return (
    <HPContext.Provider value={ contextValue }>
      {children}
    </HPContext.Provider>
  );
}

export default HPProvider;