import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

import { TOGGLE_SIDEBAR } from "../store/actionTypes";

import styles from "./TopNavigation.module.scss";

export const TopNavigation = () => {
  const dispatch = useDispatch();
  const handleShow = () =>
    dispatch({ type: TOGGLE_SIDEBAR, sidebar_is_open: true });

  return (
    <Navbar fixed="top" collapseOnSelect expand="xs" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" as="div">
          <Link href="/" passHref>
            <a className={styles.nav_header}>Orji Chidi</a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
        />
      </Container>
    </Navbar>
  );
};
