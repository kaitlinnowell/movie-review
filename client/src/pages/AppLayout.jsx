import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
