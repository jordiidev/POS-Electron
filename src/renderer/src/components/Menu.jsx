import  menuImg  from "../assets/cth.jpg"

export default function Menu() {
  return (
    <div className="menu w-[70%] h-screen bg-slate-100">
      <div className="header-menu bg-white h-[80px] flex items-center pl-4 shadow-b-lg border-b-2">
        <div className="flex gap-2">
            <input type="text" placeholder="Search" className="rounded-lg w-80 py-2 px-2 bg-slate-100 shadow-sm"/>
            <button className="bg-black px-8 py-2 rounded-lg shadow-sm text-white">Search</button> 
        </div>
      </div>
      <div className="main-menu">
        <div className="category-wrap h-[70px]  flex items-center">
            <ul className="flex gap-4 items-center ml-4">
                <li><a href="#" className="bg-white text-slate-400 px-4 py-2 border-none rounded-2xl ">All</a></li>
                <li><a href="#" className="bg-white text-slate-400 px-4 py-2 border-none rounded-2xl ">Coffee</a></li>
                <li><a href="#" className="bg-white text-slate-400 px-4 py-2 border-none rounded-2xl ">Non Coffee</a></li>
                <li><a href="#" className="bg-white text-slate-400 px-4 py-2 border-none rounded-2xl ">Food</a></li>
                <li><a href="#" className="bg-white text-slate-400 px-4 py-2 border-none rounded-2xl ">Snack</a></li>
                <li><a href="#" className="bg-white text-slate-400 px-4 py-2 border-none rounded-2xl ">Dessert</a></li>
            </ul>
        </div>

        <div className="wrap-card-menu grid grid-cols-5 gap-4 px-4 py-2">
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            <div className="card-menu px-2 py-2 bg-white h-full rounded-lg shadow-xl">
                <img id="card-img" src={menuImg} alt="" className="w-full" />
                <h1 id="card-title" className="font-semibold text-lg">Hot Cappucino</h1>
                <p id="card-price">Rp. 30.000</p>
            </div>
            
        </div>

      </div>
    </div>
  )
}
