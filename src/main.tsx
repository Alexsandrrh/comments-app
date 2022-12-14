import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'components';

const container = document.getElementById('root');

if (!container) throw Error('Not found container!');

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
