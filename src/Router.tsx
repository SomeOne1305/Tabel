import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import App from "./App";
import { Default, InnerCategory, SubCategory } from "./components/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<Default/>} path=""/>
      <Route element={<SubCategory/>} path=":category"/>
      <Route element={<InnerCategory/>} path=":category/:inner"/>
    </Route>
  )
);

export default router;
