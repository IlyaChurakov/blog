import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/storeProvider';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
