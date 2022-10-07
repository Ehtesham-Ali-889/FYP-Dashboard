import "./Appointments.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"

import EditSingleAppointments from "./EditSingleAppointments"
const MyEditAppointments = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <EditSingleAppointments />

      </div>
    </div>
  )
}

export default MyEditAppointments