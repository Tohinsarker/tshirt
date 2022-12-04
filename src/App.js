import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Notfound from './components/Notfound/Notfound';
import Orders from './components/Orders/Orders';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirt.json') ,
          element: <Home></Home>
        },
        
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '*',
          element: <Notfound></Notfound>
        }
      ]
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
