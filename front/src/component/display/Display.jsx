import { useContext } from 'react';
import './Display.css';
import HPContext from '../../context/HPContext';

function Display() {
  const { loading, characters } = useContext(HPContext);

  return (
    <section className="display">
      {loading && (<p>Loading</p>)}
      {!loading && characters.map((char, index) => (
        <div key={ index } className="character-display">
          <h3>{char.character}</h3>
          <aside>
            <button type="button" onClick={ () => {} }>
              Edit
            </button>
            <button type="button" onClick={ () => {} }>
              Delete
            </button>
          </aside>
        </div>
      ))}
    </section>
  );
}

export default Display;