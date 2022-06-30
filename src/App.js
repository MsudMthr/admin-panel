import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Menu, Burger, Home, Users, Products, Charts } from "./pages/index";
import UserDetails from "./shared/UserDetails";
import ProductDetails from "./shared/ProductDetails";

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
