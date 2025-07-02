import { Outlet } from "react-router"
import Navbar from "./pageComponet/Navbar"


function MainLayout() {
  return (
    <div>
      <Navbar />

      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout
