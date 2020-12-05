import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Header from "./Header/Header";

const APP_QUERY = gql`
  {
    isLoggedIn @client
  }
`;

function App() {
  const {
    data: { isLoggedIn },
  } = useQuery(APP_QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          {isLoggedIn && <Header />}
          <Routes isLoggedIn={isLoggedIn} />
        </Router>
        <ToastContainer position="top-left" closeOnClick autoClose={4000} />
      </>
    </ThemeProvider>
  );
}

export default App;
