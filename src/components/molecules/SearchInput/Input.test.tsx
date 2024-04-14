import { render, fireEvent } from '@testing-library/react';
import renderWithTheme from '../../../utils/test.utils';
import SearchInput from './index';

describe('SearchInput Component', () => {
  it('calls onSearch with the correct search term', () => {
    const searchTerm = 'Test';
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = renderWithTheme( 
        <SearchInput placeholder="Search" onSearch={onSearchMock} />
    );

    const searchInput = getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(searchTerm);
  });
});
