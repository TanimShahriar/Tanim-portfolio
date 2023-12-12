import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className=" bg-[#37075D] text-white  py-10 px-10">
      <h2 className="font-bold text-4xl  border-b-4 w-72 text-center mx-auto opacity-70 mb-10">Latest portfolio</h2>


      <div className="space-y-5 opacity-70 hover:opacity-90">

        {/* project-1 */}
        <div className="hover:bg-[#351e47] grid lg:grid-cols-2 items-center justify-between space-y-2 rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out ">
          <div>
            <h2 className="mb-1">Project Name: Event Management </h2>
            <div className="flex flex-col space-y-2">
              <a className="underline" href="https://social-event-management-ed331.web.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
              <a className="underline" href="https://github.com/TanimShahriar/Event-management" target="_blank" rel="noopener noreferrer">Github Link</a>
            </div>

            <Link to="/eventManagement"><button className="bg-[#723d9c] hover:bg-[#37075D] block mt-3   px-3 py-1 rounded-md">Project Details</button></Link>
          </div>

          {/* slider */}
          <div className="grid lg:grid-cols-4 gap-2">
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/L0JVyhv/111.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/1XPqvsK/112.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/WxTTDff/113.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/pjysVfN/114.png" alt="" />
          </div>

        </div>

        {/* project-2 */}

        <div className="hover:bg-[#351e47] grid lg:grid-cols-2 items-center justify-between space-y-2 rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out ">
          <div>
            <h2 className="mb-1">Project Name: Online Study Group</h2>
            <div className="flex flex-col space-y-2">
              <a className="underline" href="https://cosmic-snickerdoodle-aa6813.netlify.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
              <a className="underline" href="https://github.com/TanimShahriar/online-study" target="_blank" rel="noopener noreferrer">Github Link</a>
            </div>

            <Link to="/eventManagement"><button className="bg-[#723d9c] hover:bg-[#37075D] block mt-3   px-3 py-1 rounded-md">Project Details</button></Link>
          </div>

          {/* slider */}
          <div className="grid lg:grid-cols-4 gap-2">
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/0DkJKwV/Screenshot-15.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/L1dsNFp/Screenshot-16.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/W5CmHdB/Screenshot-17.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/vYCzp2Z/Screenshot-18.png" alt="" />
          </div>

        </div>

        {/*


 */}




        {/* project-3 */}

        <div className="hover:bg-[#351e47] grid lg:grid-cols-2 items-center justify-between space-y-2 rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out ">
          <div>
            <h2 className="mb-1">Project Name: Online Study Group</h2>
            <div className="flex flex-col space-y-2">
              <a className="underline" href="https://the-hill-apartment.web.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
              <a className="underline" href="https://github.com/TanimShahriar/apartment-management" target="_blank" rel="noopener noreferrer">Github Link</a>
            </div>

            <Link to="/eventManagement"><button className="bg-[#723d9c] hover:bg-[#37075D] block mt-3   px-3 py-1 rounded-md">Project Details</button></Link>
          </div>

          {/* slider */}
          <div className="grid lg:grid-cols-4 gap-2">
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/3Fp6d0S/Screenshot-19.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/FV7Qykt/Screenshot-20.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/02rvJcK/Screenshot-21.png" alt="" />
            <img className="w-56 h-15 lg:h-36" src="https://i.ibb.co/0KdBxtf/Screenshot-22.png" alt="" />
            {/* <img className="w-56" src="https://i.ibb.co/CzqYrdS/Screenshot-23.png" alt="" /> */}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Projects;





