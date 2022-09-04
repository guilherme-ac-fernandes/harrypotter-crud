import { useContext } from 'react';
import axios from 'axios';
import HPContext from '../../context/HPContext';
import Gryffindor from '../../image/houses/Gryffindor.png';
import Hufflepuff from '../../image/houses/Hufflepuff.png';
import Ravenclaw from '../../image/houses/Ravenclaw.png';
import Slytherin from '../../image/houses/Slytherin.png';
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
          {char.house === 'Gryffindor' && <img src={Gryffindor} alt="Gryffindor logo" className='house-logo' />}
          {char.house === 'Hufflepuff' && <img src={Hufflepuff} alt="Hufflepuff logo" className='house-logo' />}
          {char.house === 'Ravenclaw' && <img src={Ravenclaw} alt="Ravenclaw logo" className='house-logo' />}
          {char.house === 'Slytherin' && <img src={Slytherin} alt="Slytherin logo" className='house-logo' />}
          {char.house === 'Unknown' && <img src={Slytherin} alt="Slytherin logo" className='unknown' />}
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