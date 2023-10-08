import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

import UserContextProvider from "../contexts/userContext";

export default function MainLayout() {
  return (
    <>
      <UserContextProvider>
        <CustomNavbar/>
        <main>
          <Outlet/>
        </main>
      </UserContextProvider>
    </>
  );
}
