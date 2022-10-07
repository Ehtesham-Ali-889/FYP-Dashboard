import "./patient.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import MySecondForm from "./MySecondForm"


const CreatePatientEmail = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <MySecondForm />
      </div>
    </div>
  )
}

export default CreatePatientEmail