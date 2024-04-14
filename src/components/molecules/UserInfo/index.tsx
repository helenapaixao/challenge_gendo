import {
  Avatar,
  UserInfoContainer,
  Username,
  Bio,
  ContentAvatar,
} from "./styles";

interface UserInfoProps {
  username: string;
  avatarUrl: string;
  bio: string;
}

const UserInfo = ({ username, avatarUrl, bio }: UserInfoProps) => {
  return (
    <UserInfoContainer>
      <Avatar src={avatarUrl} alt={username} />

      <ContentAvatar>
        <Username>{username}</Username>

        <Bio>{bio}</Bio>
      </ContentAvatar>
    </UserInfoContainer>
  );
};

export default UserInfo;
