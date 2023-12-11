
const Banner = () => {
  return (
    <div className=" px-4 lg:px-20  lg:flex justify-between items-center pt-20 bg-[#37075D] h-[700px] text-white">

      {/* div-1: Content */}
      <div className="space-y-5">
        <div className="text-5xl opacity-70 font-medium">
          <h2 className="">Web </h2>
          <h2>development</h2>
        </div>
        <p className="w-full lg:w-2/3 opacity-60 font-light ">I am a passionate web developer from bangladesh. I love to code. Building beautiful and fancy website is my hobby. In the free time I explore new programming frameworks and write contents about technoloy. Feel free to ask me question. Here I am .......</p>
        <div className="space-x-2 ">
          <a className="bg-[#723d9c] px-4 py-2 rounded-lg" href="../../../../public/Resume.pdf" download>Download CV</a>
          <a className="bg-[#723d9c] px-4 py-2 rounded-lg">Browse More</a>

        </div>
      </div>

      {/* div-2: logo/image */}
      <div>
        <img className="w-96 lg:w-[1400px] opacity-60 rounded-3xl  h-72 mt-5 lg:h-[500px]" src="https://i.ibb.co/QCM0FKq/Screenshot-4.png" alt="" />
      </div>

    </div>
  );
};

export default Banner;