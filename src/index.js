import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import { RouterProvider } from 'react-router-dom';
import About from './components/About';
import Profilespage from './components/Profilespage';
import Profilepage from './components/Profilepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <p>Not found 404</p>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/profile',
    element: <Profilespage />,
    children: [
      {
        path: '/profile/:profileId',
        element: <Profilepage />
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
