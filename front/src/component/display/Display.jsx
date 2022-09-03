import { useContext } from 'react';
import './Display.css';
import HPContext from '../../context/HPContext';

function Display() {
  const { loading, characters } = useContext(HPContext);

  return (
    <section>
      {loading && (<p>Loading</p>)}
      {!loading && characters.map((char, index) => <h4 key={ index }>{char.character}</h4>)}
    </section>
  );
}

export default Display;