import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main/Main';
import Home from './Pages/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import About from './Components/About/About';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },

    ]
  }
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}>
     </RouterProvider>
     
    </div>
  );
}

export default App;
