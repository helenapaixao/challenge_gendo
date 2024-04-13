import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Title } from "./styles";

export const Header = () => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={faGithub}
        scale={1}
        size={"2x"}
        color={"#fff"}
        style={{ marginRight: "10px", marginLeft: "20px" }}
      />
      <Title>GitHub profiles</Title>
    </Container>
  );
};

export default Header;
