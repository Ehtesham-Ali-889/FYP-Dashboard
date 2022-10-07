import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { myuserColumns, myuserRows } from "../../mydatatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import AllPatients from "../../pages/patient/AllPatients";


const MyPatientDatatable  = () => {
  const [data, setData] = useState(userRows);
  const [mydata,setMyData]=useState([])
  const [doctorid,setDoctorId]=useState();
  
  return (
    <div className="datatable">
      {/* <div className="datatableTitle">
        <Link to="/add" className="link">
          Add New
        </Link>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
      </div> */}
      {/* <DataGrid
        className="datagrid"
        rows={mydata}
        columns={myuserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
        
      /> */}
      <AllPatients />
    </div>
  );
};

export default MyPatientDatatable ;
