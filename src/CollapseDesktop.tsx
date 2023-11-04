import { useEffect, useState } from "react";
import MainData from "./MainScreen/MainData";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProfileDetail from "./Nav/Profile/ProfileDetail";
import ContactUs from "./Nav/SideBar/ContactUs";
import About from "./Nav/SideBar/About";
import Chat from "./Nav/SideBar/Chat";
import Nav from "./Nav/NavBar";
import LogInPage from "./ScreenCover/Login/Signup/LogInPage";
import AddEditEmployee from "./MainScreen/Add-Edit-Employee";
import SignUP from "./ScreenCover/Login/Signup/SignUp";
import { CoverComponent } from "./ScreenCover/CoverComponent";
// import { MantineLogo } from '@mantine/ds';
import { editEmpContext } from "./Context/Context";
interface empType {
  id: number;
  name: string;
  email: string;
  contact: string;
}

export function CollapseDesktop() {
  const [empList, setEmpList] = useState<empType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/emp")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpList(resp);
      })
      .catch((err: string) => {
        console.log("json error", err);
      });
  }, []);

  return (
    // <editEmpContext.Provider value={}>
      <>

      <BrowserRouter>
        <Routes>
          <Route path="/cover" element={<CoverComponent />}></Route>
          <Route path="/cover/login" element={<LogInPage />}></Route>
          <Route path="/cover/signup" element={<SignUP />}></Route>

          <Route path="/" element={<Nav />}>
            <Route path="/" element={<MainData emplist={empList} />}></Route>
            <Route path="/emp/create" element={<AddEditEmployee />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/profile" element={<ProfileDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    // </editEmpContext.provider>
  );
}
// AppShell examples | Mantine
