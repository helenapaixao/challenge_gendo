import React, { useState, useEffect } from "react";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";
import Repository from "../../components/Repository";
import {
  getRepositories,
  getStarredRepositories,
  getUserData,
} from "../../services/api";
import SearchInput from "../../components/Input";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import { HomeContainer, TabsContainer, UserInfoContainer } from "./styles";

type RepositoryType = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks: number;
  star: number;
};


const Home = () => {
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);
  const [starredRepositories, setStarredRepositories] = useState<RepositoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [starredSearchTerm, setStarredSearchTerm] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [filteredRepositories, setFilteredRepositories] = useState<RepositoryType[]>([]);
  const [filteredStarredRepositories, setFilteredStarredRepositories] = useState<RepositoryType[]>([]);

  useEffect(() => {
    setFilteredRepositories(repositories);
    setFilteredStarredRepositories(starredRepositories);
  }, [repositories, starredRepositories]);

  useEffect(() => {
    const loadUserRepositories = async () => {
      try {
        const user = "helenapaixao";
        const userData = await getUserData(user);
        const repositoriesData = await getRepositories(user);
        const starredData = await getStarredRepositories(user);
        console.log("userData", userData);
        setUsername(userData.name);
        setBio(userData.bio);
        setAvatarUrl(userData.avatar_url);
        setRepositories(repositoriesData as unknown as RepositoryType[]);
        setStarredRepositories(starredData as unknown as RepositoryType[]);
        setLoading(false);
      } catch (error) {
        console.error("Error loading repositories:", error);
        setLoading(false);
      }
    };

    loadUserRepositories();
  }, []);

  const handleTabClick = (index: number) => {
    console.log("Clicked on tab", index);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleStarredSearchInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStarredSearchTerm(e.target.value);
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepositories(filtered);
  };

  const handleStarredSearch = (searchTerm: string) => {
    const filteredStarred = starredRepositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStarredRepositories(filteredStarred);
  };

  return (
    <div>
      <Header />
      <HomeContainer>
        <UserInfoContainer>
          <UserInfo username={username} avatarUrl={avatarUrl} bio={bio} />{" "}
        </UserInfoContainer>
        <TabsContainer>
          <Tabs onTabClick={handleTabClick}>
            <Tab label="Repo" number={repositories.length}>
              <SearchInput
                placeholder="Filter by name"
                value={searchTerm}
                onChange={handleSearchInputChange}
                onSearch={handleSearch}
              />
              {loading ? (
                <Loading />
              ) : filteredRepositories.length === 0 ? (
                <p>No repositories found</p>
              ) : (
                filteredRepositories.map((repo) => (
                  <Repository key={repo.id} repo={repo} />
                ))
              )}
            </Tab>
            <Tab label="Starred" number={starredRepositories.length}>
              <SearchInput
                placeholder="Filter by name"
                value={starredSearchTerm}
                onChange={handleStarredSearchInputChange}
                onSearch={handleStarredSearch}
              />
              {loading ? (
                <Loading />
              ) : filteredStarredRepositories.length === 0 ? (
                <p>No starred repositories found</p>
              ) : (
                filteredStarredRepositories.map((repo) => (
                  <Repository key={repo.id} repo={repo} />
                ))
              )}
            </Tab>
          </Tabs>
        </TabsContainer>
      </HomeContainer>
    </div>
  );
};

export default Home;
