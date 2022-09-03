import { useContext, useState } from 'react';
import axios from 'axios';
import './Form.css';
import HPContext from '../../context/HPContext';

function Form() {
  const [character, setCharacter] = useState('');
  const { setUpdateList } = useContext(HPContext);

  const handleClick = async () => {
    await axios.post('http://localhost:3001/character', { character });
    setUpdateList(true);
  }

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
      <button
        type="button"
        onClick={ handleClick }
      >
        Add Character
      </button>
    </form>
  );
}

export default Form;