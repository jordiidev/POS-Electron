import  AvatarUser  from "../assets/logo.jpg"
export default function Cart() {
  return (
    <div className="cart w-[25%] h-screen bg-white flex flex-col">
      <div className="header-cart bg-white h-[80px] flex items-center pl-3 shadow-b-lg border-b-2">
        <div className="flex gap-4 items-center">
          <img src={AvatarUser} className="w-10 h-10 rounded-full shadow-md border border-black" alt="" />
          <span>
            <h1 className="text-black">Welcome, Jordi !</h1>
            <p className="user-role text-slate-400">Cashier</p>
          </span>
        </div>
      </div>
      <div className="title-cart h-[70px] flex items-center justify-between px-4">
        <h1 className="text-black font-semibold text-2xl">Current Order</h1>
        <select name="order-type" id="order-type" className="bg-black text-white w-36 h-10 rounded-md px-2 text-center">
          <option value="dinein">Dine In</option>
          <option value="dinein">Take Away</option>
          <option value="dinein">GoFood</option>
          <option value="dinein">Grab Food</option>
        </select>
      </div>
      <div className="wrap-cart-menu flex-grow px-4 py-2 h-[400px] overflow-y-auto border-b">
        <div className="cart-menu flex justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg">Hot Cappucino</h1>
              <div className="flex gap-5 items-center">
                <a href="#" className="text-white bg-black  text-xl text-center w-8 h-8 rounded-md">-</a>
                <p className="text-center">1</p>
                <a href="#" className="text-white bg-black  text-xl text-center w-8 h-8 rounded-md">+</a>
              </div>
            </div>
            <p className="font-semibold text-lg">Rp.30.000</p>
        </div>
        <div className="cart-menu flex justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg">Hot Cappucino</h1>
              <div className="flex gap-5 items-center">
                <a href="#" className="text-white bg-black  text-xl text-center w-8 h-8 rounded-md">-</a>
                <p className="text-center">1</p>
                <a href="#" className="text-white bg-black  text-xl text-center w-8 h-8 rounded-md">+</a>
              </div>
            </div>
            <p className="font-semibold text-lg">Rp.30.000</p>
        </div>
      </div>
      <div className="footer-cart px-4 py-3">
        <p></p>
        <div className="subtotal-price flex justify-between mb-2">
          <p className="text-slate-400 font-semibold text-md">Subtotal :</p>
          <p className="text-slate-400 font-semibold text-md">Rp. 60.000</p>
        </div>
        <div className="tax flex justify-between mb-2">
        <p className="text-slate-400 font-semibold text-md">Tax (11%) :</p>
          <p className="text-slate-400 font-semibold text-md">Rp. 6.600</p>
        </div>
        <div className="total-price flex justify-between mb-2">
          <h1 className="text-black font-semibold text-2xl">Total :</h1>
          <h1 className="text-black font-semibold text-2xl">Rp. 66.600</h1>
        </div>
        <button onClick={() => alert("Process")} className="bg-black px-8 py-2 w-full rounded-md text-white">Process</button>
      </div>
    </div>
  )
}
