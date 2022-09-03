import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HPContext from './HPContext';

function HPProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3001/character');
    setCharacters( [{ character: 'Harry Potter' }]);
    setLoading(false);
  }, []);

  const fetchCharacters = async () => {
    const result = await axios.get('http://localhost:3001/character');
    setCharacters(result);
  };

  const contextValue = {
    loading,
    characters,
    setCharacters,
    fetchCharacters,
  };

  return (
    <HPContext.Provider value={ contextValue }>
      {children}
    </HPContext.Provider>
  );
}

export default HPProvider;