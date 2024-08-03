import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "../components/Footer";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.composition}>
        <Logo />
        <AppNav />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
