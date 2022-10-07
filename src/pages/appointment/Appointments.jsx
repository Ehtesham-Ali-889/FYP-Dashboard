import "./Appointments.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import MyAppointmentDatatable from "../../components/datatable/MyAppointmentDatatable"
// import Datatable from "../../components/datatable/Datatable"

// import MyPatientDatatable from "../../components/datatable/MyPatientDatatable"
const Appointments = () => {

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <MyAppointmentDatatable />
      </div>
    </div>
  )
}

export default Appointments