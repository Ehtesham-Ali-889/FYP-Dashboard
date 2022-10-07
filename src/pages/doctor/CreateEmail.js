import "./doctor.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import MyForm from "./MyForm"


const CreateEmail = () => {


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <MyForm />
      </div>
    </div>
  )
}

export default CreateEmail