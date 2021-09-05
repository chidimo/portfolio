import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import { TOGGLE_SIDEBAR } from "../store/actionTypes";

export const TopNavigation = () => {
  const dispatch = useDispatch();
  const handleShow = () =>
    dispatch({ type: TOGGLE_SIDEBAR, sidebar_is_open: true });

  return (
    <Navbar fixed="top" collapseOnSelect expand="xs" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Orji Chidi Matthew</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
        />
      </Container>
    </Navbar>
  );
};
