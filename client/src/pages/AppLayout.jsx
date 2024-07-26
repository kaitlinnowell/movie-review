import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
