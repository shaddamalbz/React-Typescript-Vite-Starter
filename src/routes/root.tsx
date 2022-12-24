import { createBrowserRouter } from 'react-router-dom'

// layouts
import BaseLayout from '@/layouts/baseLayout'

// pages
import About from '@/pages/About'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

export default router
