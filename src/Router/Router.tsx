import { createBrowserRouter } from "react-router-dom";
import { Main } from "../main/Main";
import { Home } from "../page/home/Home";
import { Erro } from './../shared/Erro';
import { Ebtedaye } from "../page/ebtedaye/Ebtedaye";
import { Dakhil } from "../page/dakhil/Dakhil";
import Login from './../page/login/login'; // Corrected duplicate import
import { Admission } from "../page/admisson/Addmision";
import { Sujjetion } from "../page/sujjetion/Sujjetion";
import { Register } from './../page/register/register';
import Dashboard from "../Dahboard/Dashboard";
import Student from "../Dahboard/Student/Student"; // Corrected the import path

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Erro />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/ebtedaye',
        element:<Ebtedaye />,
      },
      {
        path:'/dakhil',
        element:<Dakhil />,
      },
      {
        path:'/sujjetion',
        element:<Sujjetion />,
      },
      {
        path:'/login',
        element:<Login />,
      },
      {
        path:'/register',
        element:<Register />,
      },
      {
        path:'/admission',
        element:<Admission />,
      },

      // Dashboard Route
      {
        path:'/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'student',  // Nested path for student
            element: <Student />
          }
        ]
      }
    ]
  }
]);
