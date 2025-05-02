import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./components/Layout/Layout";
import Top from "./pages/Top/Top";
import Contact from "./pages/Contact/Contact";
import UserInfo from "./pages/UserInfo/UserInfo";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userInfo" element={<UserInfo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
