import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Ejercicio1 from './components/pages/Ejercicio1/Ejercicio1';
import Ejercicio2 from './components/pages/Ejercicio2/Ejercicio2';
import Ejercicio3 from './components/pages/Ejercicio3/Ejercicio3';
import Ejercicio4 from './components/pages/Ejercicio4/Ejercicio4';
import Ejercicio5 from './components/pages/Ejercicio5/Ejercicio5';
import Ejercicio6 from './components/pages/Ejercicio6/Ejercicio6';
import Ejercicio7 from './components/pages/Ejercicio7/Ejercicio7';
import Ejercicio8 from './components/pages/Ejercicio8/Ejercicio8';
import Ejercicio9 from './components/pages/Ejercicio9/Ejercicio9';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/ejercicio1', element: <Ejercicio1 /> },
  { path: '/ejercicio2', element: <Ejercicio2 /> },
  { path: '/ejercicio3', element: <Ejercicio3 /> },
  { path: '/ejercicio4', element: <Ejercicio4 /> },
  { path: '/ejercicio5', element: <Ejercicio5 /> },
  { path: '/ejercicio6', element: <Ejercicio6 /> },
  { path: '/ejercicio7', element: <Ejercicio7 /> },
  { path: '/ejercicio8', element: <Ejercicio8 /> },
  { path: '/ejercicio9', element: <Ejercicio9 /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className={'prose pl-12 pt-12 pb-30'}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
