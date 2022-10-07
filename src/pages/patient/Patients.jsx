import "./patient.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"

import MyPatientDatatable from "../../components/datatable/MyPatientDatatable"
const Patients = () => {

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <MyPatientDatatable/>
      </div>
    </div>
  )
}

export default Patients