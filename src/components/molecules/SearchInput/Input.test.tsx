import { render, fireEvent } from '@testing-library/react';
import SearchInput from './index';

describe('SearchInput Component', () => {
  it('renders correctly', () => {
    const placeholderText = 'Search';
    const onSearchMock = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchInput placeholder={placeholderText} onSearch={onSearchMock} />
    );

    const searchInput = getByPlaceholderText(placeholderText);
    expect(searchInput).toBeInTheDocument();
  });

  it('calls onSearch when "Enter" key is pressed', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput placeholder="Search" onSearch={onSearchMock} />
    );

    const searchInput = getByPlaceholderText('Search');
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });
});
