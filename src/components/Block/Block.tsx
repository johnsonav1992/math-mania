import { BlockColors } from '../../types/types';
// import { blockColors } from '../../styles/theme.stylex';

interface Props {
  color: BlockColors;
}

const Block = ({ color }: Props) => {
  return <div></div>;
};

export default Block;

// const styles = stylex.create({
//   numberBlock: (color: BlockColors) => ({
//     backgroundColor: blockColors[color],
//     borderColor: null,
//     height: '100px',
//     width: '100px',
//     borderRadius: '10px',
//     margin: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)'
//   })
// });
