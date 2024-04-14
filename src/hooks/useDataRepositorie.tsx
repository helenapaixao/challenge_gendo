import { useState, useEffect } from "react";
import {
  getRepositories,
  getStarredRepositories,
  getUserData,
} from "../services/api"

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

type UserDataType = {
  name: string;
  bio: string;
  avatar_url: string;
};

const useDataRepositorie = () => {
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);
  const [starredRepositories, setStarredRepositories] = useState<RepositoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [starredSearchTerm, setStarredSearchTerm] = useState<string>("");
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [filteredRepositories, setFilteredRepositories] = useState<RepositoryType[]>([]);
  const [filteredStarredRepositories, setFilteredStarredRepositories] = useState<RepositoryType[]>([]);

  useEffect(() => {
    const loadUserRepositories = async () => {
      try {
        const user = "helenapaixao";
        const userData = await getUserData(user);
        const repositoriesData = await getRepositories(user);
        const starredData = await getStarredRepositories(user);
        setUserData(userData);
        setRepositories(repositoriesData as RepositoryType[]);
        setStarredRepositories(starredData as RepositoryType[]);
        setLoading(false);
      } catch (error) {
        console.error("Error loading repositories:", error);
        setLoading(false);
      }
    };

    loadUserRepositories();
  }, []);

  useEffect(() => {
    setFilteredRepositories(repositories);
    setFilteredStarredRepositories(starredRepositories);
  }, [repositories, starredRepositories]);

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

  return {
    repositories,
    starredRepositories,
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
  };
};

export default useDataRepositorie;
