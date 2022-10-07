import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Doctor from './pages/doctor/Doctor';
import mydatatable from "./components/datatable/MyDatatable";
import AddDoctor from "./pages/doctor/AddDoctor";
import AllUsers from "./pages/doctor/AllUsers";
import EditUser from "./pages/doctor/Edituser";
import EditDoctor from "./pages/doctor/EditDoctor";
import Add from './pages/doctor/Add'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="custom" element={<mydatatable />} /> */}
            <Route path="doctor">
              <Route index element={<Doctor />} />
            </Route>
            <Route path="/add" element={<Add />} />
            <Route path="/new" element={<AddDoctor />} />
            {/* <Route path="/all" element={<AllUsers />} /> */}
            <Route path="/editdoctor/:id" element={<EditDoctor />} />
            {/* <Route path="/edit/:id" element={<EditUser />} /> */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
