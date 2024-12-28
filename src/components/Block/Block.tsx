import * as stylex from "@stylexjs/stylex";
import { style } from "../../styles/utils";

const styles = stylex.create({
  numberBlock: (color: string) => ({
    backgroundColor: color,
    borderColor: null,
    height: "100px",
    width: "100px",
    borderRadius: "10px",
    margin: "10px",
  }),
});

interface Props {
  color: string;
}

const Block = ({ color }: Props) => {
  return <div {...style(styles.numberBlock(color))}></div>;
};

export default Block;
