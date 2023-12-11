
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Autoplay, Navigation } from 'swiper/modules';

const EventManagement = () => {
  return (
    <>
      <div className='bg-[#37075D] text-white text-opacity-70 p-10'>
        <h2 className='text-center pt-14 text-3xl font-semibold underline'>Project overview</h2>
        <p className='mt-2'>The project is about different types of social event management like birthday event, anniverssary program, marriage ceremony, engagement party, retirement party. The primary purpose of this website is to streamline the event planning process, providing users with tools and features to effectively manage various aspects of their events. Key features of this project are:</p>
        <div>
          <div className='flex items-center justify-between gap-28'>
            <div className='pt-10 w-1/2'>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/L0JVyhv/111.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/1XPqvsK/112.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/WxTTDff/113.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/pjysVfN/114.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px]' src="https://i.ibb.co/bBgXG1H/115.png" alt="" /></SwiperSlide>


              </Swiper>
            </div>
            <div className="space-y-5 w-1/2 mt-20">
              <div className="text-5xl opacity-70 font-medium">
                <h2 className="">Event </h2>
                <h2>Management</h2>
              </div>
              <p className="w-3/4  opacity-60 font-light ">These events can range from small gatherings and parties to large-scale conferences and weddings. The primary goal of such a website is to streamline the event planning process, enhance communication among organizers and participants, and provide a centralized platform for managing various aspects of an event. Here are some key features and functionalities commonly found in social event management websites</p>

            </div>
          </div>
          <div className='flex justify-center gap-10 my-5'>
            <div className='w-1/2'>
              <h2 className='text-3xl underline mt-3'>Project Features:</h2>
              <ul className='list-disc space-y-1 mt-3'>
                <li>User Registration and Profiles.</li>
                <li>Event Discovery: Different types of events.</li>
                <li>Event details: For details user have to be logged in. After logging in user can see details about event and also go to pricing plans.</li>
                <li>Protected routes: Members and vip access route has displayed on header.</li>
                <li>Mobile Responsive: The website has been designed to mobile-friendly, as many users access event information on their smartphones.</li>
                <li>In the gallery route user can see works and photos of different event.</li>
              </ul>
            </div>
            <div className='w-1/2'>
              <h2 className='text-3xl underline mt-3'>Used Technologies:</h2>
              <ul className='list-disc space-y-1 mt-3'>
                <li>Html</li>
                <li>Tailwind</li>
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>MUI</li>
                <li>Axios</li>
                <li>AOS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventManagement;