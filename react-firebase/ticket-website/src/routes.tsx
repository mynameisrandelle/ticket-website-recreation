
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Error from './pages/error'
import Register from './pages/register'
import Home from './pages/home'
import BillAddress from './pages/billAddress'
import Receipt from './pages/receipt'

const router = createBrowserRouter([

    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />
    },

    {
        path: '/register',
        element: <Register />,
        errorElement: <Error />
    },

    {
        path: '/home',
        element: <Home />,
        errorElement: <Error />
    },
    
    {
        path: '/billAddress',
        element: <BillAddress />,
        errorElement: <Error />
    },

    {
        path: '/receipt',
        element: <Receipt />,
        errorElement: <Error />
    },

  ])
  
  export default router