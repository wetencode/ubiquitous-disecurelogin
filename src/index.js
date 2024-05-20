import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Default from './App';
// import { Transfer } from './Transfer';

import Preloader from './Preloader/Preloader';
// import FastSpin from './fastspin/'


const LazyLoadedComp = React.lazy(()=> import('./Transfer'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader /> }>
      <LazyLoadedComp />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();