
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


  const navLinks = <>

    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/'>Home</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/apartment'>About</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/apartment'>Services</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/apartment'>Projects</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/apartment'>Blog</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/gallery'>Contact</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/gallery'>Gallery</NavLink>


  </>
  return (
    <div className="navbar  bg-[#37075D]  max-w-screen-2xl fixed z-10 bg-opacity-90  px-10  border-b-2 border-slate-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <Link to="/"><img className="h-10 rounded-full lg:h-14" src="https://i.ibb.co/yVxWJsX/png.png" alt="" /></Link>
          <div className="flex flex-col space-y-0 text-white">
            <h2 className="font-bold ml-3 uppercase leading-relaxed">Tanim</h2>
            <h2 className="font-bold uppercase">Shahriar</h2>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>


      <div className="font-medium gap-1  flex flex-col leading-tight text-white navbar-end  ml-4 lg:ml-60">

        <h2>ssmtsshr@gmail.com</h2>
        <h2 className="text-sm">+8801707772446</h2>

      </div>
    </div>
  );
};

export default Navbar;

