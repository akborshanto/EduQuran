import { createBrowserRouter } from "react-router-dom";
import { Main } from "../main/Main";
import { Home } from "../page/home/Home";
import { Erro } from './../shared/Erro';
import { Ebtedaye } from "../page/home/ebtedaye/Ebtedaye";
import { Dakhil } from "../page/home/dakhil/Dakhil";


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
      }
    ]
  }
]);
