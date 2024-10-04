import Cart from "../components/Cart";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
        <div className="dashboard-wrap flex ">
              <Sidebar />
              <Menu />
              <Cart />
        </div>
    </>
  )
}
