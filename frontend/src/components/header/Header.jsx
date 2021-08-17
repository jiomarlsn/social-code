import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";

const routers = [
  {
    path: "/actor",
    name: "Actors",
  },
  {
    path: "/category",
    name: "Categories",
  },
  {
    path: "/film",
    name: "Films",
  },
  {
    path: "/oscar",
    name: "Oscar",
    disabled: true,
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => router.push("/")}>SocialCode</Navbar.Brand>
        <Nav className="me-auto">
          {routers.map((routerInfo) => (
            <Nav.Link
              active={router.pathname === routerInfo.path}
              disabled={routerInfo.disabled}
              key={routerInfo.path}
              onClick={() => router.push(routerInfo.path)}
            >
              {routerInfo.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
