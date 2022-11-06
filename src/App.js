import { React, useEffect } from "react";
import { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/locale/fr";
import "dayjs/locale/de";
import {
  Routes,
  useLocation,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { TextField, Button, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./createaccount";
import Login from "./login";
import { loadUser } from "./actions/userAction";
import SideBar from "./sidebar";
import MyCalendar from "./calender";
import AddImage from "./addimage";
import ImageList from "./images";

const locales = ["ko", "fr", "de"];

function App() {
  const dispatch = useDispatch();

  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  console.log(user, "user", isAuthenticated);
  const [tovalue, setToValue] = useState(dayjs());
  const [fromvalue, setFromValue] = useState(dayjs());
  const [reason, setReason] = useState("");
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const handleToChange = (newValue) => {
    setToValue(newValue);
  };

  const handleFromChange = (newValue) => {
    setFromValue(newValue);
  };

  const handlechange = (e) => {
    setReason(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setReason("");
  };
  const Dox = styled.div``;

  const Box1 = styled.div`
    width: 500px;
    height: 300px;
    margin: 60px auto;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 10px;
    text-align: center;
  `;

  return (
    <>
      <BrowserRouter>
        {user?.email && <SideBar />}
        <Routes>
          <Route path="/createaccount" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/addimage" element={<AddImage />} />
          <Route path="/imagelist" element={<ImageList />} />
          <Route path="/calender" element={<MyCalendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
