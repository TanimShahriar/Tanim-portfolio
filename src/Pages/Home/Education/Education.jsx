
const Education = () => {
  return (
    <div className=" bg-[#37075D] text-white  py-10 px-10">
      <h2 className="font-bold text-4xl  border-b-4 w-60 text-center mx-auto opacity-70 mb-10">Education</h2>

      {/* BSC */}
      <div className="space-y-5 opacity-70 hover:opacity-90">
        {/* card-1 */}
        <div className="hover:bg-[#723d9c] rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out">
          <h2>Bachelor of Computer Science</h2>
          <h2>Session: 2014-2018</h2>
          <h2>IUBAT University</h2>
          <h2>Location: Uttara, Dhaka, Bangladesh</h2>
          <h2>CGPA: 3.22</h2>
        </div>

        {/* HSC */}
        <div className="hover:bg-[#723d9c] rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out">
          <h2>Higher Secondary Certificate</h2>
          <h2>Session: 2009-2010</h2>
          <h2>Passing Year: 2011</h2>
          <h2>Milestone College</h2>
          <h2>Location: Uttara, Dhaka, Bangladesh</h2>
          <h2>CGPA: 4.20</h2>
        </div>

        {/* SSC */}
        <div className="hover:bg-[#723d9c] rounded-lg  p-2 border border-slate-500  h-auto  hover:shadow-lg  hover:scale-100 duration-500 ease-in-out">
          <h2>Secondary School Certificate</h2>
          <h2>Session: 2007-2008</h2>
          <h2>Passing Year: 2009</h2>
          <h2>S.A.H.M High School</h2>
          <h2>Location: Tongi, Dhaka, Bangladesh</h2>
          <h2>CGPA: 4.94</h2>
        </div>
      </div>
    </div>
  );
};

export default Education;