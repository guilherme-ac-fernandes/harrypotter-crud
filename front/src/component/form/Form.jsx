import React, { useContext } from 'react';
import axios from 'axios';
import HPContext from '../../context/HPContext';
import './Form.css';

function Form() {
  const {
    charEdit,
    character,
    setCharacter,
    setUpdateList,
    setCharEdit,
    house,
    setHouse,
  } = useContext(HPContext);

  const handleAdd = async () => {
    const URL = 'http://localhost:3001/character';
    await axios.post(URL, { character, house });
    setUpdateList(true);
    setCharacter('');
    setHouse('Gryffindor');
  };

  const handleEdit = async () => {
    setCharEdit(0);
    const URL = `http://localhost:3001/character/${charEdit}`;
    await axios.put(URL, { character, house });
    setUpdateList(true);
    setCharacter('');
    setHouse('Gryffindor');
  };

  return (
    <form className="form">

      <label htmlFor="character">
        <input
          type="text"
          id="character"
          value={character}
          placeholder="Insert Character"
          onChange={({ target: { value } }) => setCharacter(value)}
        />
      </label>

      <label htmlFor="house">
        <select
          name="house"
          id="house"
          value={house}
          onChange={({ target: { value } }) => setHouse(value)}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>

      {charEdit !== 0 ? (
        <button type="button" onClick={handleEdit}>
          Edit Character
        </button>
      ) : (
        <button type="button" onClick={handleAdd}>
          Add Character
        </button>
      ) }
    </form>
  );
}

export default Form;
