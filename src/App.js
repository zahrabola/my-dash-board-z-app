import {ColorContextMode, useMode} from "./themes"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Topbar from "./screen/global/Topbar";
import Sidebar from "./screen/global/Sidebar";
import Dashboard from "./screen/dashboard/Dashboard";
import Team from "./screen/team/Team";
import Contacts from "./screen/contacts/Contacts";
import Invoice from "./screen/invoice/Invoice";
import Forms from "./screen/form/Forms";
import Bar from "./screen/bar/Bar";
import Pie from "./screen/pie/Pie";
import Line from "./screen/line/Line";
import FAQ from "./screen/faq/FAQ";
import Calendar from "./screen/calendar/Calendar";
import Geography from "./screen/geography/Geography";

/*1:20:56*/

function App() {
  const [theme,  colorMode ] = useMode();
  return (
  <ColorContextMode.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
    <Sidebar />
   <main className="content">
    <Topbar />
    <Routes>
<Route path="/" element={<Dashboard />}/>
<Route path="/team" element={<Team />}/>
<Route path="/contacts" element={<Contacts />}/>
<Route path="/invoices" element={<Invoice />}/>
<Route path="/form" element={  <Forms />}/>
<Route path="/bar" element={<Bar/>}/>
<Route path="/pie" element={<Pie />}/>
<Route path="/line" element={<Line />}/>
<Route path="/faq" element={<FAQ/>}/>
<Route path="/calendar" element={<Calendar/>}/>
<Route path="/geography" element={<Geography/>}/>
    </Routes>
   </main>
  </div>
 </ThemeProvider>
 </ColorContextMode.Provider>

  );
}

export default App;
