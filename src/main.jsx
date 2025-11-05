import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Register from './components/Register';
import AuthProvider from './contexts/AuthProvider';
import ProdDetails from './components/ProdDetails';
import MyProducts from './components/MyProducts';
import MyBids from './components/MyBids';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'allproducts',
        Component: AllProducts
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'my-products',
        Component: MyProducts
      },
      {
        path: 'my-bids',
        Component: MyBids
      },
      {
        path: 'proddetails/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProdDetails
      },

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
