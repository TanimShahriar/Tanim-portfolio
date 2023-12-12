
const About = () => {
  return (
    <div className="flex justify-between items-center py-4 bg-[#37075D] text-white px-10">
      {/* div-1 */}
      <div>
        <h4 className="uppercase text-lg font-bold mb-2">about me</h4>
        <h2 className="text-2xl lg:text-5xl font-bold w-full lg:w-[600px] opacity-80">Thrive on turning innovative ideas into reality.</h2>

        <h2 className="mb-2 mt-7 text-xl lg:text-3xl font-bold opacity-90">Why web development?</h2>
        <h4 className="w-full lg:w-[700px] opacity-70 mb-5">Ever since my early encounters with the world of coding, I've been captivated by the endless possibilities of the web. My journey into web development began when I was doing a project for my varsity semester and I haven't looked back since. What excites me the most is the ability to blend technology and creativity to build solutions that make a meaningful impact.</h4>

        <a className="bg-slate-800 hover:bg-slate-600  px-4 py-2 rounded-lg" href="/Resume.pdf" download>Download CV</a>

      </div>

      {/* div-2 */}
      <div>
        <img src="https://i.ibb.co/ZXfN9Rn/IMG-1390.jpg" alt="" />

      </div>

    </div>
  );
};

export default About;