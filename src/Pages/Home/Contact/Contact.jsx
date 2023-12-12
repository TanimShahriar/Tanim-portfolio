import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import CountUp from 'react-countup';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ftcg8tk', 'template_cgou6oj', form.current, 'HCX4T7v-lvEeSt8eC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="p-7 grid lg:grid-cols-2 items-center  bg-[#37075D] text-white ">

      {/* div-1 */}
      <div className=''>
        <h1 className='text-5xl font-bold mb-7 opacity-90'>Design and innovation</h1>
        <p className='w-3/4 opacity-75 mb-9'>I love tackling challenges head-on. Complex problems are opportunities for growth, and I approach each one with a determination to find the most effective and elegant solution.</p>

        <div className='flex gap-3 items-center '>
          <div className='flex flex-col items-center justify-center p-3  w-64 h-44 bg-slate-800'>
            <div className='flex gap-1 items-center justify-center'>
              <CountUp className='text-4xl ' end={10} />
              <h2 className='text-4xl'>+</h2>
            </div>
            <h2 className='font-bold text-2xl mt-2'>Completed project</h2>
          </div>

          <div className='flex flex-col items-center justify-center p-3  w-64 h-44 bg-slate-800'>
            <div className='flex gap-1 items-center justify-center'>
              <CountUp className='text-4xl ' end={50} />
              <h2 className='text-4xl'>+</h2>
            </div>
            <h2 className='font-bold text-2xl mt-2'>Github repositories </h2>
          </div>
        </div>

      </div>


      {/* div-2 */}
      <div className="mx-aut0 md:flex-row ">
        <div className="  h-full  text-white"> <span>
          <h1 className="text-3xl font-semibold text-center mb-4 text-white underline opacity-90">Get Touch With Me</h1>
          <h4 className='opacity-70'>Feel free to message me. You are always welcome. Dedicated to build your request project.</h4>

        </span>
          {/* form */}
          <form ref={form} onSubmit={sendEmail} className="mt-6 leading-7 text-center">

            <input type="text" name="from_name" placeholder="Full Name" id="" className="border-b-2 w-full mb-4 p-1 border-b-white text-black placeholder:opacity-80 text-sm  focus:outline-none" />

            <input type="email" name="from_email" placeholder="Email Address" id="" className="border-b-2 w-full mb-4 p-1 border-b-white text-black placeholder:opacity-80 text-sm  focus:outline-none" />



            <textarea id="message" name="message" placeholder="Write us a message" className="w-full border-2 border-white h-44 text-sm outline-none text-black placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>

            {/* <button className="block m-auto w-full text-center border  rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-violet-900">Send</button> */}

            <input className="block m-auto w-full text-center border  rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-slate-800" type="submit" value="Send" />
          </form>
        </div>

      </div>
    </div>

  );
};

export default Contact;