import "./Appointments.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
import MyDatatable from "../../components/datatable/MyDatatable"

import AddSingleAppointment from "./AddSingleAppointment"
const AddAppointment = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <AddSingleAppointment />
      </div>
    </div>
  )
}

export default AddAppointment