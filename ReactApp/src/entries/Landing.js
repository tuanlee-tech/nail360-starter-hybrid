import React from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from '../components/Providers';
import Landing from '../modules/Landing/Landing';
import '../index.css';

const container = document.getElementById('Landing-react-root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Providers>
      <Landing />
    </Providers>
  );
}
