import { useContext } from 'react';
import axios from 'axios';
import HPContext from '../../context/HPContext';
import './Display.css';

function Display() {
  const {
    loading,
    characters,
    setUpdateList,
    setCharEdit,
    setCharacter,
  } = useContext(HPContext);

  const handleEdit = ({ id, character  }) => {
    setCharEdit(id);
    setCharacter(character);
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
            <button type="button" className="edit-button" onClick={ () => handleEdit(char) }>
              Edit
            </button>
            <button type="button" className="delete-button" onClick={ () => handleDelete(char.id) }>
              Delete
            </button>
          </aside>
        </div>
      ))}
    </section>
  );
}

export default Display;