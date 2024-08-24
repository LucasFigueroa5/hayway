import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Nosotros from './views/nosotros/Nosotros.jsx';
import Contacto from './views/contacto/Contacto.jsx';
import Layout from './components/layout/Layout.jsx';
import Home from './views/home/Home.jsx';
import TiposHojas from './components/tiposHojas/TiposHojas.jsx';
import Legales from './views/legales/Legales.jsx';
import Colaboraciones from './views/colaboraciones/Colaboraciones.jsx';
import Centro from './views/centro/Centro.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // El Layout envuelve todas las rutas
    children: [
      {
        path: '/', // Ruta principal
        element: <Home />,
      },
      {
        path: 'nosotros', // Ruta "Nosotros"
        element: <Nosotros />,
      },
      {
        path: 'contacto', // Ruta "Contacto"
        element: <Contacto />,
      },
      
      {
        path: 'hojas', // Ruta "Contacto"
        element: <TiposHojas />,
      },
      {
        path: 'legales', // Ruta "Contacto"
        element: <Legales />,
      },
      {
        path: 'colaboraciones', // Ruta "Contacto"
        element: <Colaboraciones />,
      },
      {
        path: 'centro', // Ruta "Contacto"
        element: <Centro />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
