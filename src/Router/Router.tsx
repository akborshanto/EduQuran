import { createBrowserRouter } from "react-router-dom";
import { Main } from "../main/Main";
import { Home } from "../page/home/Home";
import { Erro } from './../shared/Erro';
import { Ebtedaye } from "../page/ebtedaye/Ebtedaye";
import { Dakhil } from "../page/dakhil/Dakhil";

import login from './../page/login/login';
import Login from "./../page/login/login";
import { Admission } from "../page/admisson/Addmision";
import { Sujjetion } from "../page/sujjetion/Sujjetion";
import { Register } from './../page/register/register';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Erro></Erro>,
    children: [  // Corrected "Children" to "children"
      {
        path: '/',
        element: <Home />,

      },
      {
        path:'/ebtedaye',
        element:<Ebtedaye></Ebtedaye>
      },
      {
        path:'/dakhil',
        element:<Dakhil></Dakhil>
      },
      {
        path:'/sujjetion',
        element:<Sujjetion></Sujjetion>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>,
        
      },
      {
        path:'/admission',
        element:<Admission></Admission>,

      },
    ]
  }
]);
