import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
        <ToastContainer position="top-left" autoClose="4000" closeOnClick />
      </>
    </ThemeProvider>
  );
}

export default App;
