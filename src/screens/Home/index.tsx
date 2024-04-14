import useDataRepositorie from "../../hooks/useDataRepositorie";
import Tabs from "../../components/molecules/Tabs";
import Tab from "../../components/molecules/Tab";
import Repository from "../../components/molecules/Repository";
import SearchInput from "../../components/molecules/SearchInput";
import Loading from "../../components/atoms/Loading";
import Header from "../../components/atoms/Header";
import UserInfo from "../../components/molecules/UserInfo";
import { HomeContainer, TabsContainer, UserInfoContainer } from "./styles";

const Home = () => {
  const {
    loading,
    searchTerm,
    starredSearchTerm,
    userData,
    filteredRepositories,
    filteredStarredRepositories,
    setSearchTerm,
    setStarredSearchTerm,
    handleSearch,
    handleStarredSearch,
  } = useDataRepositorie();

  const handleTabClick = (index: number) => {
    console.log("Clicked on tab", index);
  };

  return (
    <div>
      <Header />
      <HomeContainer>
        <UserInfoContainer>
          {userData ? (
            <UserInfo username={userData.name} avatarUrl={userData.avatar_url} bio={userData.bio} />
          ) : (
            <Loading />
          )}
        </UserInfoContainer>
        <TabsContainer>
          <Tabs onTabClick={handleTabClick}>
            <Tab label="Repos" number={filteredRepositories.length}>
              <SearchInput
                placeholder="Filter by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            <Tab label="Starred" number={filteredStarredRepositories.length}>
              <SearchInput
                placeholder="Filter by name"
                value={starredSearchTerm}
                onChange={(e) => setStarredSearchTerm(e.target.value)}
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
