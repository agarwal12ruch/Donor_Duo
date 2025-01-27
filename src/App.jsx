import Website from "./pages/Website";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Goto from "./component/Scroll/Goto";
import Login from "./component/Login/Login";
import SignIn from "./component/SignIn/SignIn"
import Verify from "./component/Verify/Verify"
function App() {
  return (
    <BrowserRouter>
        <div style={{background:"var(--black)",overflow:"hidden"}}>
            <Header/>
        </div>
      <Routes>
        <Route>
          <Route path="/" element={<Website/>}/>
          <Route path="/LogIn" element={<Login/>} />
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/Verify" element={<Verify/>}/>
        </Route>
      </Routes>
      <Footer/>
      <Goto/>
    </BrowserRouter>
  );
}

export default App;
