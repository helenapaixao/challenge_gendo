import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { theme } from "../styles/themes/default"

const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default renderWithTheme;
