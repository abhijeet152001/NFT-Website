// import logo from './logo.svg';
// import './App.css';s

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Navigation from "./Components/Navigation";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Roadmap from "./Components/sections/Roadmap";
import Showcase from "./Components/sections/Showcase";
import Team from "./Components/sections/Team";
import Faq from "./Components/sections/Faq";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
   <>
   <GlobalStyles />
   <ThemeProvider theme={light}>
    <Navigation />
    <Home />
    <About />
    <Roadmap />
    <Showcase />
    <Team />
    <Faq />
    <Footer />
    <ScrollToTop />
     </ThemeProvider>
   </>
  );
}

export default App;
 