import '@testing-library/jest-dom/extend-expect';
import Loading from './index';
import renderWithTheme from '../../../utils/test.utils'; 

describe('Loading Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = renderWithTheme(<Loading />);
    const loadingComponent = getByTestId('loading-component');
    const spinnerElement = getByTestId('spinner-element');
    
    expect(loadingComponent).toBeInTheDocument();
    expect(spinnerElement).toBeInTheDocument();
  });
});
