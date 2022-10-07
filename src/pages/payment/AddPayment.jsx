import "./allPayments.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
import MyDatatable from "../../components/datatable/MyDatatable"

import AddSinglePayment from "./AddSinglePayment"
const AddPayment = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <AddSinglePayment />
      </div>
    </div>
  )
}

export default AddPayment