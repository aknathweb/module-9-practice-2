import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';

const App = () => {
  //crate browser router
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>
      }
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
