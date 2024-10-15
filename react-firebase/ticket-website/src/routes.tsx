
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Error from './pages/error'
import Register from './pages/register'
import Home from './pages/home'
import BillAddress from './pages/billAddress'
import Receipt from './pages/receipt'
import ProtectedRoutes from './components/ui/ProtectedRoutes'

const router = createBrowserRouter([

    // This protects the website from unAuthorized users
    // unauthorized user redirect to the login page
    {
        element: <ProtectedRoutes />,
        children: [
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
        ]
    },


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

  ])
  
  export default router