import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { style } from "../../styles/utils";
import Block from "../Block/Block";

const Gameboard = () => {
  const [operands, setOperands] = useState<number[]>([]);
  const hasNoOperands = operands.every((op) => !op);

  return (
    <>
      {!hasNoOperands ? (
        <div>
          <button {...style(styles.button)}>Start Game</button>
        </div>
      ) : (
        <>
          <Block color="blue" />
        </>
      )}
    </>
  );
};

export default Gameboard;

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: "blue",
      ":hover": "green",
    },
    color: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
});
