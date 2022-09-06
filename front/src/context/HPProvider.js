/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import HPContext from './HPContext';

function HPProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState('');
  const [house, setHouse] = useState('Gryffindor');
  const [loading, setLoading] = useState(true);
  const [updateList, setUpdateList] = useState(false);
  const [charEdit, setCharEdit] = useState(0);

  const updateCharacters = async () => {
    const URL = 'http://localhost:3001/character';
    const { data } = await axios.get(URL);
    setCharacters(data);
  };

  useEffect(() => {
    setLoading(true);
    updateCharacters();
    setLoading(false);
  }, []);

  useEffect(() => {
    updateCharacters();
    setUpdateList(false);
  }, [updateList]);

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
    <HPContext.Provider value={contextValue}>
      {children}
    </HPContext.Provider>
  );
}

HPProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HPProvider;
