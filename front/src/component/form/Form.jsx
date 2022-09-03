import { useContext } from 'react';
import axios from 'axios';
import './Form.css';
import HPContext from '../../context/HPContext';

function Form() {
  const {
    charEdit,
    character,
    setCharacter,
    setUpdateList,
    setCharEdit,
  } = useContext(HPContext);

  const handleAdd = async () => {
    const URL = 'http://localhost:3001/character';
    await axios.post(URL, { character });
    setUpdateList(true);
    setCharacter('');
  };

  const handleEdit = async () => {
    setCharEdit(0);
    const URL = `http://localhost:3001/character/${charEdit}`;
    await axios.put(URL, { character });
    setUpdateList(true);
    setCharacter('');
  };

  return (
    <form className="form">
      <label htmlFor="character">
        <input
          type="text"
          id="character"
          value={ character }
          placeholder="Insert Character"
          onChange={ ({ target: { value } }) => setCharacter(value) }
        />
      </label>
      {charEdit !== 0 ? (
        <button type="button" onClick={ handleEdit }>
          Edit Character
        </button>
      ) : (
        <button type="button" onClick={ handleAdd }>
          Add Character
        </button>
      ) }
    </form>
  );
}

export default Form;