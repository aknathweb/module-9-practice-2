import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layout/Main';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

const App = () => {
  //crate browser router
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,// Static part
        children: [ //Dynamic part
          {
            path: '/',
            element: <Shop></Shop>
          },
          {
            path: '/orders',
            element: <Orders></Orders>
          },
          {
            path: '/inventory',
            element: <Inventory></Inventory>
          },
          {
            path: '/about',
            element: <About></About>
          }
        ]
      },
      {
        path: '*',// arrive unknown path
        element: <><h1>No Data Found</h1></>
      },
    ]
  )

  return (
    <div>
      {/* set router provider */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
