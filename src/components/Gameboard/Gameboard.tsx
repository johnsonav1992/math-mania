import * as stylex from '@stylexjs/stylex';
import { style } from '../../styles/utils';
import Block from '../Block/Block';
import { useAtom } from 'jotai';
import { operandsAtom, screenAtom } from '../../state/state';

const Gameboard = () => {
  const [operands, setOperands] = useAtom(operandsAtom);
  const [screen, setScreen] = useAtom(screenAtom);
  const hasNoOperands = operands.every(op => !op);

  switch (screen) {
    case 'welcome':
      return (
        <div>
          <button
            {...style(styles.button)}
            onClick={() => setScreen('selection')}
          >
            Start Game
          </button>
        </div>
      );
    case 'selection':
      return <Block color='blue' />;
    case 'game':
      return <Block color='blue' />;
  }
};

export default Gameboard;

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: 'blue',
      ':hover': 'green'
    },
    color: 'white',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer'
  }
});
