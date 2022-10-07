import "./Payments.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"

// import EditSingleAppointments from "./EditSingleAppointments"
import EditSinglePayments from './EditSinglePayments'
const MyEditPayments = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <EditSinglePayments />

      </div>
    </div>
  )
}

export default MyEditPayments