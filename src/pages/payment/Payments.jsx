import "./allPayments.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import MyAppointmentDatatable from "../../components/datatable/MyAppointmentDatatable"
import MyPaymentDatatable from '../../components/datatable/MyPaymentDatatable'
// import Datatable from "../../components/datatable/Datatable"

// import MyPatientDatatable from "../../components/datatable/MyPatientDatatable"
const Payments = () => {

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <MyPaymentDatatable />
      </div>
    </div>
  )
}

export default Payments