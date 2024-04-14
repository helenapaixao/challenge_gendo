import '@testing-library/jest-dom/extend-expect';
import Header from './index';
import renderWithTheme from '../../../utils/test.utils'; 

test('renders GitHub header with correct styles and text', () => {
  const { getByTestId, getByText } = renderWithTheme(
    <Header />
  );

  const githubIcon = getByTestId('github-icon');
  const title = getByText('GitHub');
  const subtitle = getByText('profiles');

  expect(githubIcon).toBeInTheDocument();
  expect(githubIcon).toHaveStyle('margin-right: 10px; margin-left: 20px;');
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});
