import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ routes }) => {
  return (
    <>
      <Header routes={routes} />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
