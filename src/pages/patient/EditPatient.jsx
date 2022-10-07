import "./patient.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
import MyDatatable from "../../components/datatable/MyDatatable"
import EditSinglePatient from "./EditSinglePatient"
const EditPatient = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <EditSinglePatient />

      </div>
    </div>
  )
}

export default EditPatient