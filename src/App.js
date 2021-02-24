import React from "react";
import { Intro } from "./components/Intro/Intro";
import { Acquaintance } from "./components/Acquaintance/Acquaintance";
import { Navbar } from "./components/Navbar/Navbar";
import { Wrapper } from "./Wrapper/Wrapper";
import { BrowserRouter as Router } from "react-router-dom";
import { Users } from "./components/Users/Users";
import { Register } from "./components/Register/Register";
import { Footer } from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "../src/store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Intro />
        <Wrapper>
          <Acquaintance />
          <Users />
          <Register />
          <Footer />
        </Wrapper>
      </Router>
    </Provider>
  );
}

export default App;
