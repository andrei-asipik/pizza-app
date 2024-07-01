import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Menu from './pages/Menu/Menu.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Error from './pages/Error/Error.tsx';
import Layout from './layout/Layout/Layout.tsx';
import ProductItem from './pages/Product/Product.tsx';
import { PREFIX } from './helpers/API.ts';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Menu /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/product/:id',
        element: <ProductItem />,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          return defer({
            data: new Promise((resolve) => {
              setTimeout(() => {
                axios
                  .get(`${PREFIX}/products/${params.id}`)
                  .then((data) => resolve(data))
                  .catch();
              }, 2000);
            }),
          });
        },
      },
    ],
  },
  { path: '*', element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
