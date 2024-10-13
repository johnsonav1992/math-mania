import * as stylex from "@stylexjs/stylex";
import { commonColors } from "./styles/theme.stylex";
import { style } from "./styles/utils";
import Gameboard from "./components/Gameboard/Gameboard";

function App() {
  return (
    <div {...style(styles.bg)}>
      <h1 {...style(styles.title)}>Math Mania!</h1>
      <Gameboard />
    </div>
  );
}

export default App;

const styles = stylex.create({
  bg: {
    backgroundColor: commonColors.bgBlue,
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: "5rem",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  },
});
