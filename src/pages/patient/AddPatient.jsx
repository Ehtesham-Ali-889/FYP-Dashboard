import "./patient.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
import MyDatatable from "../../components/datatable/MyDatatable"

import AddSinglePatient from "./AddSinglePatient"
const AddPatient = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <AddSinglePatient />
      </div>
    </div>
  )
}

export default AddPatient