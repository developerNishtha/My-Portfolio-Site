import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
import Project from "./components/Project/Project";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      {/* <Experience /> */}
      {/* <Works /> */}
      <Project />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;