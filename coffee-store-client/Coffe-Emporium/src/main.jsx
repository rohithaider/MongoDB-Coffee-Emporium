import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: async () => {
      const response = await fetch('http://localhost:5000/coffee');
      return response.json();
    },
  },
  {
    path:"addCoffee",
    element:<AddCoffee/>
  },
  {
    path:"updateCoffee/:id",
    element:<UpdateCoffee/>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

const revalidateLoaderData = () => {
  router.navigate('/', { replace: true }); // Re-fetch data by navigating.
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

export default revalidateLoaderData;