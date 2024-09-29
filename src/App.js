import './App.scss';
import Header from "./components/Header/header";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
      <Nav/>
    </div>
  );
}

export default App;
