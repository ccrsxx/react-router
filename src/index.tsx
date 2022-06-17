import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouteSwitch } from './RouteSwitch';
import './index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <RouteSwitch />
  </StrictMode>
);
