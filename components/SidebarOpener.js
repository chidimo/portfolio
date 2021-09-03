import { useDispatch } from "react-redux";
import { TOGGLE_SIDEBAR } from "../store/actionTypes";
import { List } from "../svg/List";
import styles from './SidebarOpener.module.scss'

export const SidebarOpener = () => {
  const dispatch = useDispatch();
  const handleShow = () =>
    dispatch({ type: TOGGLE_SIDEBAR, sidebar_is_open: true });

  return (
    <span onClick={handleShow} className={styles.opener}>
      <List />
    </span>
  );
};
