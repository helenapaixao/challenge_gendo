import axios, { AxiosResponse, AxiosInstance } from "axios";

export interface Repository {
  html_url: any;
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks: number;
  language: string;
}

export interface User {
  avatar_url: string;
  name: string;
  bio: string;
}

const api: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization:
      "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",
  },
});

export const getUserData = async (username: string): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getRepositories = async (
  username: string
): Promise<Repository[]> => {
  try {
    const response: AxiosResponse<Repository[]> = await api.get(
      `/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    throw error;
  }
};

export const getStarredRepositories = async (
  username: string
): Promise<Repository[]> => {
  try {
    const response: AxiosResponse<Repository[]> = await api.get(
      `/users/${username}/starred`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao buscar repositórios marcados como favoritos:",
      error
    );
    throw error;
  }
};
