import * as stylex from "@stylexjs/stylex";
import { style } from "../../styles/utils";

const styles = stylex.create({
  block: {
    backgroundColor: "red",
    borderColor: "",
    height: "100px",
    width: "100px",
    borderRadius: "10px",
    margin: "10px",
  },
});

interface Props {
  color: string;
}

const Block = ({ color }: Props) => {
  console.log(color);
  return <div></div>;
};

export default Block;
