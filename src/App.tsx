import { createBrowserRouter } from 'react-router-dom';

import { Admin } from './pages/Admin/index';
import { Home } from './pages/Home/index';
import { Login } from './pages/Login/index';
import { Networks } from './pages/NetWorks/index';
import { NotFound } from './pages/error/index';

import { Private } from '../src/routes/private';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/Login',
    element: <Login />
  },

  {
    path: '/Admin',
    element: <Private><Admin /></Private>
  },

  {
    path: '/admin/social',
    element: <Private><Networks /></Private>
  },

  {
    path: '*',
    element: <NotFound />
  }
])

export { router };

