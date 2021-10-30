import React from "react";
import "./App.css";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import background from "./images/background2.jpeg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "100vh",
          paddingBottom: "10rem",
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
