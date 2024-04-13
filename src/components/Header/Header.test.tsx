import { render } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<Header />);

    const githubIcon = getByTestId('github-icon');
    const titleElement = getByText('GitHub');
    const subtitleElement = getByText('profiles');

    expect(githubIcon).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
