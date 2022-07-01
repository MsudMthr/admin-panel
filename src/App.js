import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Menu,
  Burger,
  Home,
  Users,
  Products,
  Charts,
  Auth,
} from "./pages/index";
import UserDetails from "./shared/UserDetails";
import ProductDetails from "./shared/ProductDetails";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenuHandler = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="grid h-auto min-h-screen grid-cols-12">
      <Menu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <div className="col-span-12 bg-[#f7f7f7] md:col-span-10 ">
        <Burger showMenuHandler={showMenuHandler} isShowMenu={isShowMenu} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth/" element={<Auth />}>
            <Route path="/Auth/Register" element={<Register />} />
            <Route path="/Auth/Login" element={<Login />} />
          </Route>
          <Route path="/Users" element={<Users />} />
          <Route path="/Charts" element={<Charts />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/users/:_id" element={<UserDetails />} />
          <Route path="/Products/:title" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
