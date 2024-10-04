import  LogoForm  from "../assets/electron.svg"
import { useNavigate } from "react-router-dom"
export default function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <div id="login" className="flex justify-center items-center min-h-screen">
        <form action="user-login" className="text-black bg-slate-100 rounded-xl shadow-md w-[400px] h-[250px] flex flex-col justify-center gap-8 items-center ">
          <img src={LogoForm} alt="" className="w-16 h-16"/>
          <div className="flex gap-5">
            <input placeholder="User ID" type="text" className="rounded-md w-40 h-8 text-center"/>
          </div>
          <button onClick={() => navigate("/dashboard")} className="bg-black px-8 py-2 rounded-md text-white">Login</button>
        </form>
      </div>
    </>
  )
}
