import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeBranch,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { RepoDescription, RepoName, Divider, IconContainer } from "./styles";

type RepositoryProps = {
  repo: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language?: string;
    forks: number;
    stargazers_count: number;
  };
};

export const Repository = ({ repo }: RepositoryProps) => {
  return (
    <>
      <RepoName>{repo.name}</RepoName>
      <RepoDescription>{repo.description}</RepoDescription>
      <IconContainer>
        <FontAwesomeIcon icon={faStar} style={{ color: "#5C646D" }} />
        {repo.stargazers_count}
        <FontAwesomeIcon icon={faCodeBranch} style={{ color: "#5C646D" }} />
        {repo.forks}
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon icon={faCode} style={{ color: "#5C646D" }} />
        {repo.language}
      </IconContainer>
      <Divider />
    </>
  );
};

export default Repository;
