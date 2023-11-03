import { useEffect, useState } from "react";
import MainData from "./MainData/MainData";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProfileDetail from "./ProfileDetail";
import ContactUs from "./Nav/ContactUs";
import About from "./Nav/About";
import Chat from "./Nav/Chat";
import Nav from "./Nav/AppShell";
import LogInPage from "./Log/in/LogInPage";
import AddEditEmployee from "./MainData/Add-Edit-Employee";
// import { MantineLogo } from '@mantine/ds';
interface empType {
  id: number;
  name: string;
  email: string;
  num: number;
}

export function CollapseDesktop() {
  const [empList, setEmpList] = useState<empType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5174/emp")
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogInPage />}></Route>

          <Route path="/" element={<Nav />}>
            <Route path="/" element={<MainData emplist={empList} />}></Route>
            <Route path="/Add/emp" element={<AddEditEmployee />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/profile" element={<ProfileDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// AppShell examples | Mantine
