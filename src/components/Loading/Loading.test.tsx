import { render } from '@testing-library/react';
import Loading from './index';

describe('Loading Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Loading />);
    const loadingComponent = getByTestId('loading-component');
    const spinnerElement = getByTestId('spinner-element');
    
    expect(loadingComponent).toBeInTheDocument();
    expect(spinnerElement).toBeInTheDocument();
  });
});
