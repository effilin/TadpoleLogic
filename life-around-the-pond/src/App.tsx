import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Sky from "./components/Sky";
import Header from "./components/Header/header";
import "./App.css";

function App() {
  return (
    <div className='myApp'>
      <Sky>
        <Header />
        <main className='contentArea'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/life-around-the-pond' element={<Blog />} />
          </Routes>
        </main>
      </Sky>
    </div>
  );
}

export default App;
