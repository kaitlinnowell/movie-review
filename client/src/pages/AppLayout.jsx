import Header from "../components/Header";
import Footer from "../components/Footer";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
=======
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

>>>>>>> ecb55ee321ef77e2a9c70c5bf5d841ec9f2fc791
function AppLayout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
<<<<<<< HEAD
=======
      <Navbar />
>>>>>>> ecb55ee321ef77e2a9c70c5bf5d841ec9f2fc791
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
