import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className=" bg-[#37075D] text-white  py-10 px-10">
      <h2 className="font-bold text-4xl  border-b-4 w-52 text-center mx-auto opacity-70 mb-10">Projects</h2>


      <div className="space-y-5 opacity-70 hover:opacity-90">

        {/* project-1 */}
        <div className="hover:bg-[#351e47] space-y-2 rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out">
          <h2>Project Name: Event Management </h2>
          <div className="flex flex-col space-y-2">
            <a className="underline" href="https://social-event-management-ed331.web.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
            <a className="underline" href="https://github.com/TanimShahriar/Event-management" target="_blank" rel="noopener noreferrer">Github Link</a>
          </div>

          <button className="bg-[#723d9c] hover:bg-[#37075D] block  px-3 py-1 rounded-md">Project Details</button>

        </div>

        {/* project-2 */}

        <div className="hover:bg-[#351e47] space-y-2 rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out">
          <h2>Project Name: Event Management </h2>
          <div className="flex flex-col space-y-2">
            <a className="underline" href="https://social-event-management-ed331.web.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
            <a className="underline" href="https://github.com/TanimShahriar/Event-management" target="_blank" rel="noopener noreferrer">Github Link</a>
          </div>

          <button className="bg-[#723d9c] hover:bg-[#37075D] block  px-3 py-1 rounded-md">Project Details</button>

        </div>


        {/* project-2 */}
        <div className="hover:bg-[#351e47] space-y-2 rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out">
          <h2>Project Name: Event Management </h2>
          <div className="flex flex-col space-y-2">
            <a className="underline" href="https://social-event-management-ed331.web.app/" target="_blank" rel="noopener noreferrer">Project Link</a>
            <a className="underline" href="https://github.com/TanimShahriar/Event-management" target="_blank" rel="noopener noreferrer">Github Link</a>
          </div>

          <button className="bg-[#723d9c] hover:bg-[#37075D] block  px-3 py-1 rounded-md">Project Details</button>

        </div>
      </div>
    </div>
  );
};

export default Projects;