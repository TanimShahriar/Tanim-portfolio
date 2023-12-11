
const Skills = () => {
  return (
    <div className=" bg-[#37075D] text-white  py-10 px-10">
      <h2 className="font-bold text-4xl  border-b-4 w-40 text-center mx-auto opacity-70 mb-10">My skills</h2>
      <div className="grid grid-cols-3 lg:grid-cols-6 justify-center items-center  gap-5 max-w-7xl lg:max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center">
          <img className="h-24 w-16 lg:w-24 rounded-lg" src="https://i.ibb.co/Cn8jJb7/react-icon.png" alt="" />
          <h2 className="font-bold">React</h2>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-24 w-16 lg:w-24 text-green-700 rounded-lg" src="https://i.ibb.co/qkCqwms/4691284-mongodb-icon.png" alt="" />
          <h2 className="font-bold">MongDB</h2>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-24 w-16 lg:w-24 rounded-lg" src="https://i.ibb.co/89MbCLD/icons8-express-js-96.png" alt="" />
          <h2 className="font-bold">Express</h2>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-24 w-16 lg:w-24 rounded-lg" src="https://i.ibb.co/ByMsYzn/1174935.webp" alt="" />
          <h2 className="font-bold">NodeJs</h2>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-24 w-16 lg:w-24 text-green-700 rounded-lg" src="https://i.ibb.co/26sBmpQ/67109815.png" alt="" />
          <h2 className="font-bold">Tailwind</h2>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-24 w-16 lg:w-24 rounded-lg" src="https://i.ibb.co/0YC2R0J/pngwing-com.png" alt="" />
          <h2 className="font-bold">Material-UI</h2>
        </div>

      </div>
    </div>
  );
};

export default Skills;