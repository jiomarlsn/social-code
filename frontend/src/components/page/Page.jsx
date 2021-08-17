import { Container } from "react-bootstrap";

const Page = ({ children, title }) => {
  return (
    <Container className="mt-4">
      <h2>{title}</h2>
      <div className="mt-3">{children}</div>
    </Container>
  );
};

export default Page;
