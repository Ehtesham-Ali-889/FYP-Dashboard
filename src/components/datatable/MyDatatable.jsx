import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { myuserColumns, myuserRows } from "../../mydatatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import AllUsers from "../../pages/doctor/AllUsers";


const MyDatatable = () => {
  const [data, setData] = useState(userRows);
  const [mydata,setMyData]=useState([])
  const [doctorid,setDoctorId]=useState();
  useEffect(() => {
    axios
      .get('http://localhost:3010/doctor/alldoctor')
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);
        setDoctorId(res.data._id)
      })
      .catch((err) => console.log(err));
  }, []);
  
  function deletedata(id) {
    axios
      .delete('http://localhost:3010/doctor/removedoctor/' + id)
      .then((res) => {
        console.log(res.data);
        console.log(id);
      })
      .catch((err) => console.log(err));
  }
  // const handleDelete = (id) => {

  //   setData(data.filter((item) => item.id !== id));
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to="/edit/:id" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deletedata(doctorid)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
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
      <AllUsers />
    </div>
  );
};

export default MyDatatable;
