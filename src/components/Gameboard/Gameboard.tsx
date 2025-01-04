import Block from '../Block/Block';
import { useAtom } from 'jotai';
import { screenAtom } from '../../state/state';

const Gameboard = () => {
  const [screen, setScreen] = useAtom(screenAtom);

  switch (screen) {
    case 'welcome':
      return (
        <div>
          <button onClick={() => setScreen('selection')}>Start Game</button>
        </div>
      );
    case 'selection':
      return (
        <div>
          <form>
            <label htmlFor='operator'>Choose an operator:</label>
            <select onChange={() => []}>
              <option value='plus'>Plus</option>
              <option value='minus'>Minus</option>
            </select>
            <button onClick={() => setScreen('game')}>Start Practice</button>
          </form>
        </div>
      );
    case 'game':
      return <Block color='blue' />;
  }
};

export default Gameboard;

// const styles = stylex.create({
//   button: {
//     backgroundColor: {
//       default: 'blue',
//       ':hover': 'green'
//     },
//     color: 'white',
//     padding: '1rem',
//     borderRadius: '0.5rem',
//     border: 'none',
//     fontSize: '1.5rem',
//     cursor: 'pointer'
//   }
// });
