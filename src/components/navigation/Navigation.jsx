import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  /* const { isLoggedIn, logout } = useAuthContext(); */

  const closeMenu = () => setIsOpen(false);

  /* const handleLogout = () => {
    logout();
    closeMenu();
    toast.success("Du er nu logget ud");
    navigate("/");
  }; */

  return (
    <nav className={styles.navbar}>
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>

      <div className={styles["burger-menu"]}>
        
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={28}
          color="#F07232"
        />
      </div>

      <ul
        className={
          isOpen ? `${styles["nav-links"]} ${styles.open}` : styles["nav-links"]
        }
      >
        <li>
          <NavLink onClick={closeMenu} to="/">
            FORSIDE
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/blog">
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/faq">
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/contact">
            KONTAKT
          </NavLink>
        </li>

        {/* {isLoggedIn ? (
          <>
            <li>
              <NavLink onClick={closeMenu} to="/backoffice">
                Backoffice
              </NavLink>
            </li>

            <li>
              <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                LOG UD
              </a>
            </li>
          </>
        ) : (
          <li>
            <NavLink onClick={closeMenu} to="/login">
              LOGIN
            </NavLink>
          </li>
        )} */}
      </ul>
    </nav>
  );
};

export default Navigation;
