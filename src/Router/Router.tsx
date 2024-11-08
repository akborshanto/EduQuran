import { createBrowserRouter } from "react-router-dom";
import { Main } from "../main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<h1>THIS IS ERROR</h1>
  },
]);
