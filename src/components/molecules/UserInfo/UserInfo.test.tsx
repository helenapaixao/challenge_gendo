import { render } from '@testing-library/react';
import UserInfo from './index';

test('renders user information correctly', () => {
  const username = 'Test User';
  const avatarUrl = 'https://example.com/avatar.jpg';
  const bio = 'This is a test bio';

  const { getByAltText, getByText } = render(
    <UserInfo username={username} avatarUrl={avatarUrl} bio={bio} />
  );

  const usernameElement = getByText('Test User');
  const bioElement = getByText('This is a test bio');
  const avatarElement = getByAltText('Test User');

  expect(usernameElement).toBeInTheDocument();
  expect(bioElement).toBeInTheDocument();
  expect(avatarElement).toHaveAttribute('src', 'https://example.com/avatar.jpg');
});

