import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import {theme} from "./styles/themes/default";
import Home from "./screens/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
