import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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
    <div className=" w-full  bg-[#37075D] ">
      <div className=" py-5 mx-aut0 md:flex-row ">
        <div className="  h-full  text-white p-10"> <span>
          <h1 className="text-3xl font-semibold text-center mb-4 text-white underline opacity-70">Contact Me</h1>

        </span>
          {/* form */}
          <form ref={form} onSubmit={sendEmail} className="mt-6 leading-7 text-center">

            <input type="text" name="from_name" placeholder="Full Name" id="" className="border-b-2 w-full mb-4 p-1 border-b-white text-black placeholder:opacity-80 text-sm  focus:outline-none" />

            <input type="email" name="from_email" placeholder="Email Address" id="" className="border-b-2 w-full mb-4 p-1 border-b-white text-black placeholder:opacity-80 text-sm  focus:outline-none" />



            <textarea id="message" name="message" placeholder="Write us a message" className="w-full border-2 border-white h-44 text-sm outline-none text-black placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>

            {/* <button className="block m-auto w-full text-center border  rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-violet-900">Send</button> */}

            <input className="block m-auto w-full text-center border  rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-violet-900" type="submit" value="Send" />
          </form>
        </div>

      </div>
    </div>

  );
};

export default Contact;