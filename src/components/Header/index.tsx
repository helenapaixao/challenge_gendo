import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Subtitle, Title } from "./styles";

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
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <Title>GitHub</Title>
        <Subtitle>profiles</Subtitle>
      </div>
    </Container>
  );
};

export default Header;
