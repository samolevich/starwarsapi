import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
