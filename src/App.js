import {ColorContextMode, useMode} from "./themes"
import { CssBaseline, ThemeProvider } from "@mui/material";
import './App.css';
import Topbar from "./screen/global/Topbar";

function App() {
  const [theme,  colorMode ] = useMode();
  return (
  <ColorContextMode.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
   <main className="content">
    hello
    <Topbar />
   </main>
    </div>
    </ThemeProvider>
  </ColorContextMode.Provider>

  );
}

export default App;
