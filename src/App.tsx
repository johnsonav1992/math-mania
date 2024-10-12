import * as stylex from "@stylexjs/stylex";
import { colors } from "./styles/theme.stylex";
import { style } from "./styles/utils";

function App() {
  return (
    <div {...style(styles.bg)}>
      <h1 {...style(styles.title)}>Math Mania!</h1>
    </div>
  );
}

export default App;

const styles = stylex.create({
  bg: {
    backgroundColor: colors.bgBlue,
    height: "100vh",
    width: "100vw",
    display: "flex",
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
