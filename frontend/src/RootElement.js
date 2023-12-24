import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

export default function RootElement() {
  return (
    <>
    <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
