

const Experience = () => {
  return (
    <div className=" bg-[#37075D] text-white  py-10 px-10">
      <h2 className="font-bold text-4xl  border-b-4 w-80 text-center mx-auto opacity-70 mb-10">Job Experience</h2>

      {/* card */}
      <div className="space-y-5 opacity-70 hover:opacity-90">
        {/* card-1 */}
        <div className="hover:bg-[#723d9c] rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <h2>Company name: Vcube Soft & Tech</h2>
          <h2>Job position: QA Engineer</h2>
          <h2>Job period: October, 2021- October, 2023</h2>
          <h2>Location: Baridhara, Dhaka, Bangladesh</h2>
          <h2>Job Type: Remote</h2>
        </div>

        {/* card-2 */}
        <div className="hover:bg-[#723d9c] rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
          <h2>Company name: Bismillah Chemical</h2>
          <h2>Job position: Computer admin</h2>
          <h2>Job period: June, 2020- August, 2023</h2>
          <h2>Location: Uttara, sector-4, Dhaka, Bangladesh</h2>
          <h2>Job Type: Onsite</h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;