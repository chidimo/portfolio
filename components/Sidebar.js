import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_SIDEBAR } from "../store/actionTypes";
import { getSidebarState } from "../store/uiState";
import { SidebarBody } from "./SidebarBody";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const handleClose = () =>
    dispatch({ type: TOGGLE_SIDEBAR, sidebar_is_open: false });

  const sidebarState = useSelector(getSidebarState);

  return (
    <>
      <Offcanvas show={sidebarState} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.canvas_title}>
            Orji Chidi
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className={styles.body}>
          <SidebarBody />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
