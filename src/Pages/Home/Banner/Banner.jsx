import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className=" px-4 lg:px-20  lg:flex justify-between items-center pt-20 bg-[#37075D] h-[700px] text-white">

      {/* div-1: Content */}
      <div className="space-y-5">
        <div className="text-5xl opacity-70 font-medium leading-tight">
          <h2 className="">Hi!..</h2>
          <h2>This is</h2>
          <h2>Tanim Shahriar</h2>
          <h2>Saikot</h2>
        </div>
        <p className="w-full lg:w-2/3 opacity-60 font-light ">A passionate <span className="font-bold italic"> web developer</span>  from bangladesh. I love to code. Building beautiful and fancy website is my hobby. In the free time I explore new programming frameworks and write contents about technoloy. Feel free to ask me question. Here I am .......</p>
        <div className="space-x-2 ">
          <a className="bg-[#723d9c] px-4 py-2 rounded-lg" href="../../../../public/Resume.pdf" download>Download CV</a>
          <a className="bg-[#723d9c] px-4 py-2 rounded-lg">Browse More</a>
          <div className="flex gap-3 mt-4">
            <a href="https://www.linkedin.com/in/tanim-shahriar-saikot-62a255195/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="mt-4 bg-violet-800 text-3xl"></FaLinkedin></a>
            <a href="https://www.linkedin.com/in/tanim-shahriar-saikot-62a255195/" target="_blank" rel="noopener noreferrer"><FaFacebook className="mt-4 bg-violet-800 text-3xl"></FaFacebook></a>
            <a href="https://www.linkedin.com/in/tanim-shahriar-saikot-62a255195/" target="_blank" rel="noopener noreferrer"><FaTwitter className="mt-4 bg-violet-800 text-3xl"></FaTwitter></a>
            <a href="https://www.linkedin.com/in/tanim-shahriar-saikot-62a255195/" target="_blank" rel="noopener noreferrer"><FaInstagram className="mt-4 bg-violet-800 text-3xl"></FaInstagram></a>
            <a href="https://www.linkedin.com/in/tanim-shahriar-saikot-62a255195/" target="_blank" rel="noopener noreferrer"><FaEnvelope className="mt-4 bg-violet-800 text-3xl"></FaEnvelope ></a>
            <a href="https://github.com/TanimShahriar" target="_blank" rel="noopener noreferrer"><FaGithub className="mt-4 bg-violet-800 text-3xl"></FaGithub ></a>
          </div>
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