import { HashRouter as Router, Routes , Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App(){
  return(
    <div>
      <h1>Hello App</h1>
      <Router>
        <Link to='/home'>Home</Link>|
        <Link to='/about'>About</Link>|
        <Link to='/contact'>Contact</Link>|
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<h2>Not Found</h2>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;