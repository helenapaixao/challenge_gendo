import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Header from './index';

test('renders GitHub header with correct styles and text', () => {
  const { getByTestId, getByText } = render(<Header />);

  const githubIcon = getByTestId('github-icon');
  const title = getByText('GitHub');
  const subtitle = getByText('profiles');

  expect(githubIcon).toBeInTheDocument();
  expect(githubIcon).toHaveStyle('margin-right: 10px; margin-left: 20px;');
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});