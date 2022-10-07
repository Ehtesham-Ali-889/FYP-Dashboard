import "./doctor.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
import MyDatatable from "../../components/datatable/MyDatatable"
import AddSingleDoctor from "./AddSingleDoctor"
const AddDoctor = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AddSingleDoctor />
      </div>
    </div>
  )
}

export default AddDoctor