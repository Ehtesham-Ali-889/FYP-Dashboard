import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useState, useEffect,useContext } from "react";
import CustomDrop from "./CustomDrop";

import axios from "axios";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3010/image/getmyimage")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          {/* <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div> */}
          {data.map((singleData) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} width="30" height="30" style={{borderRadius:'50%'}} />
      })}
          {/* <CustomDrop /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
