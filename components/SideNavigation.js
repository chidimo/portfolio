import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const LinkItem = (props) => {
  const { href, title, disabled } = props;

  return (
    <Link href={href} passHref>
      <Nav.Link disabled={disabled}>{title}</Nav.Link>
    </Link>
  );
};

export const SideNavigation = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">

      <LinkItem href="/portfolio" title="My Portfolio" />

      <LinkItem href="/publications" title="My Publications" />

      <LinkItem href="/certifications" title="My Certifications" />

      <LinkItem href="/blog" title="Blog" />
    </Nav>
  );
};
