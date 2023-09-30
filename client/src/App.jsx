import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home/home"
import Categories from "./pages/Categories/categories"
import Customize from "./pages/Customize/customize"
import Shop from "./pages/Shop/shop"
import Login from "./pages/Login/login"
import Signup from "./pages/Signup/signup"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="customize" element={<Customize/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
