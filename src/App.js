import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main/Main';
import Home from './Pages/Home/Home';
import AddAService from './Pages/AddAService/AddAService';
import Services from './Pages/Services/Services';
import MyReviews from './Pages/MyReviews/MyReviews';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import About from './Components/About/About';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
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
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/service/:id',
        loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`),
        element:<ServiceDetail></ServiceDetail>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/addAService',
        element:<PrivateRoute><AddAService></AddAService></PrivateRoute>
      },
      {
        path:'/myreviews',
        element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },

    ]
  },
  {
    path: '*',
    element:<NotFound></NotFound>
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
