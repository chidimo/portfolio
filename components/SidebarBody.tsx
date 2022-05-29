import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { TOGGLE_SIDEBAR } from "../store/actionTypes";

const LinkItem = (props) => {
  const { href, title, disabled } = props;

  const dispatch = useDispatch();
  const closeSidebar = () =>
    dispatch({ type: TOGGLE_SIDEBAR, sidebar_is_open: false });

  return (
    <Link href={href} passHref>
      <Nav.Link disabled={disabled} onClick={() => closeSidebar()}>
        {title}
      </Nav.Link>
    </Link>
  );
};

export const SidebarBody = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <LinkItem href="/" title="Home" />

      <LinkItem href="/portfolio" title="My Portfolio" />

      <LinkItem href="/publications" title="My Publications" />

      <LinkItem href="/certifications" title="My Certifications" />

      <LinkItem href="/blog" title="Blog" disabled />
    </Nav>
  );
};
