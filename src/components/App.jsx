import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import Routes from "./Routes";
import Header from "./Header/Header";
import { UserContext } from "../context/UserContext";
import { LOGOUT } from "../routes/Login/Queries";
import Footer from "./Footer/Footer";

const APP_QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const value = JSON.parse(localStorage.getItem("waawToken"));

function App() {
  const {
    data: { isLoggedIn },
  } = useQuery(APP_QUERY);

  const [logoutMutation] = useMutation(LOGOUT);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <UserContext.Provider value={value}>
            <Header
              myInfo={value}
              isLoggedIn={isLoggedIn}
              logout={logoutMutation}
            />
            <Routes isLoggedIn={isLoggedIn} />
            <Footer />
          </UserContext.Provider>
        </Router>
        <ToastContainer position="top-left" closeOnClick autoClose={4000} />
      </>
    </ThemeProvider>
  );
}

export default App;
