import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeBranch, faCode } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  RepoDescription,
  RepoInfo,
  RepoName,
  Divider,
  IconContainer,
} from "./styles";

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
    <div>
      <RepoName>{repo.name}</RepoName>
      <RepoDescription>{repo.description}</RepoDescription>
      <IconContainer>
        <FontAwesomeIcon icon={faStar} />
        {repo.stargazers_count}
        <FontAwesomeIcon icon={faCodeBranch} />
        {repo.forks}
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon icon={faCode} />
        {repo.language}
      </IconContainer>

      <Divider />
    </div>
  );
};

export default Repository;
