
const Service = () => {
  return (
    <div className="bg-[#37075D] text-white px-2">
      <h4 className="text-slate-100 text-center font-bold py-3 uppercase">My service</h4>
      <h2 className="text-5xl text-center font-bold w-[700px] mx-auto leading-tight mb-10 text-slate-300">Crafting stories through development and innovation</h2>
      {/* main div */}
      <div className="grid lg:grid-cols-3 gap-4 pb-5">
        {/* div-1 */}
        <div className="border-2 border-slate-700 p-4">
          <h2 className="uppercase text-center font-medium text-lg opacity-90 mb-2">Custom web application</h2>
          <p className="text-center opacity-70">I specialize in crafting bespoke web applications that address unique business challenges. From concept to deployment, I leverage my skills in React, Node, javaScript, Express, MongoDB and other resources to create tailored solutions that enhance user experience and streamline processes. Explore my portfolio for examples of custom web applications designed to meet diverse client requirements.</p>
        </div>

        {/* div-2 */}
        <div className="border-2 border-slate-700 p-4">
          <h2 className="uppercase text-center font-medium text-lg opacity-90 mb-2">Responsive Design</h2>
          <p className="text-center opacity-70">I specialize in crafting websites that adapt effortlessly to various devices, ensuring a seamless and engaging experience for users. With a focus on responsive design principles, I transform static websites into dynamic, device-agnostic platforms. Check out my portfolio to see how I've enhanced user interactions through responsive website design.</p>
        </div>

        {/* div-3 */}
        <div className="border-2 border-slate-700 p-4">
          <h2 className="uppercase text-center font-medium text-lg opacity-90 mb-2">E-Commerce solution</h2>
          <p className="text-center opacity-70">Elevate your online presence with my specialized e-commerce solutions. I bring a wealth of experience in developing secure and feature-rich online stores that drive sales and enhance customer satisfaction. From seamless payment integrations to user-friendly product catalogs, my e-commerce solutions are designed to optimize your digital storefront. Explore my portfolio for successful examples of e-commerce projects..</p>
        </div>
      </div>

    </div>
  );
};

export default Service;