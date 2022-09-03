import { useContext } from 'react';
import './Display.css';
import HPContext from '../../context/HPContext';
import axios from 'axios';

function Display() {
  const {
    loading,
    characters,
    setUpdateList,
    setCharEdit,
    setCharacter,
  } = useContext(HPContext);

  const handleEdit = (char) => {
    console.log(char);
    setCharEdit(char.id);
    setCharacter(char.character);
  };

  const handleDelete = async (id) => {
    const URL = `http://localhost:3001/character/${id}`;
    await axios.delete(URL);
    setUpdateList(true);
  };

  return (
    <section className="display">
      {loading && (<p>Loading</p>)}
      {!loading && characters.map((char) => (
        <div key={ char.id } className="character-display">
          <h3>{char.character}</h3>
          <aside>
            <button type="button" onClick={ () => handleEdit(char) }>
              Edit
            </button>
            <button type="button" onClick={ () => handleDelete(char.id) }>
              Delete
            </button>
          </aside>
        </div>
      ))}
    </section>
  );
}

export default Display;