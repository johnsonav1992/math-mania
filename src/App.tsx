import * as stylex from "@stylexjs/stylex";
import { colors } from "./styles/theme.stylex";

const styles = stylex.create({
  background: {
    backgroundColor: colors.bgBlue,
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  return <div {...stylex.props(styles.background)}>hello</div>;
}

export default App;
