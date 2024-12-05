import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import AddStudent from "../pages/AddStudent/AddStudent";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="add-student" element={<AddStudent />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
