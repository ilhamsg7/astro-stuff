import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    return (
      <>
        <div className="flex flex-col text-center w-full mb-8 mt-14">
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-red-600">
                It's a sport. Winning is the aim
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">Don't miss a Formula 1 moment – with the latest news, videos, standings and results. Go behind the scenes and get analysis straight from the paddock</p>
            <div className="divider w-80 mx-auto text-white"></div>
        </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mySwiper bg-gray-700"
        >
                <SwiperSlide>
                        <img src="src/assets/images/1.jpg" className="w-full opacity-70 bg-gray-500 object-cover h-96 object-bottom" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="src/assets/images/2.jpg" className="w-full opacity-70 bg-gray-500 object-cover h-96 object-bottom" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="src/assets/images/3.jpg" className="w-full opacity-70 bg-gray-500 object-cover h-96 object-bottom" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="src/assets/images/4.jpeg" className="w-full opacity-70 bg-gray-500 object-cover h-96 object-bottom" />
                </SwiperSlide>
        </Swiper>
      </>
    );
}