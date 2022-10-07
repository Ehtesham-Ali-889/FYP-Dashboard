import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Doctor from './pages/doctor/Doctor';
import mydatatable from "./components/datatable/MyDatatable";
// import AddDoctor from "./pages/doctor/AddSingleDoctor";
import AllDoctors from "./pages/doctor/AllDoctors";
import EditUser from "./pages/doctor/Edituser";
import EditDoctor from "./pages/doctor/EditDoctor";
// import AllPatients from "./pages/patient/AllPatients";
import Patients from "./pages/patient/Patients";
import EditPatient from "./pages/patient/EditPatient";
import Appointments from './pages/appointment/Appointments';
import MyEditAppointments from "./pages/appointment/MyEditAppointments";
import Payments from './pages/payment/Payments';
import MyEditPayments from './pages/payment/MyEditPayments'
import MyForm from "./pages/doctor/MyForm";
import MySecondForm from "./pages/patient/MySecondForm";
import CreateEmail from "./pages/doctor/CreateEmail";
import CreatePatientEmail from "./pages/patient/CreatePatientEmail";
import AddDoctor from "./pages/doctor/AddDoctor";
import AddPatient from "./pages/patient/AddPatient";
import AddAppointment from "./pages/appointment/AddAppointment";
import AddPayment from "./pages/payment/AddPayment";
import Signup from "./pages/login/Signup";
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
            <Route path="signup" element={<Signup />} />
            {/* <Route path="custom" element={<mydatatable />} /> */}

            <Route path="/createmail/:id" element={<CreateEmail />} />
            <Route path="/creatpatientemail/:id" element={<CreatePatientEmail />} />
            <Route path="/myform" element={<MyForm />} />
            <Route path="/mysecform" element={<MySecondForm />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/editpayment/:id" element={<MyEditPayments />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/editappointment/:id" element={<MyEditAppointments />} />
            <Route path="/patient" element={<Patients />} />
            <Route path="/editpatient/:id" element={<EditPatient />} />
            <Route path="doctor">
              <Route index element={<Doctor />} />
            </Route>
            <Route path="/adddoctor" element={<AddDoctor />} />
            <Route path="/addpatient" element={<AddPatient />} />
            <Route path="/addappointment" element={<AddAppointment />} />
            <Route path="/addpayment" element={<AddPayment />} />
            {/* <Route path="/new" element={<AddDoctor />} /> */}
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
