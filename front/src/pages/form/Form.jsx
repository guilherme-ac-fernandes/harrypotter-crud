import { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
  const [character, setCharacter] = useState('');

  const handleClick = async () => {
    axios.post('http://localhost:3001/character', { character });
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