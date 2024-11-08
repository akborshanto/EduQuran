import { createBrowserRouter } from "react-router-dom";
import { Main } from "../main/Main";
import { Home } from "../page/home/Home";
import { Erro } from './../shared/Erro';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Erro></Erro>,
    children: [  // Corrected "Children" to "children"
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);
