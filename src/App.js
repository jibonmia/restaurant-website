
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Main from './Main/Main';
import About from './Components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main ></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
])
function App() {
  return (

    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
