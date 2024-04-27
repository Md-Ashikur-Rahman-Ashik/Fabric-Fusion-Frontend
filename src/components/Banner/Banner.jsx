// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mx-4 md:mx-20">
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
        <SwiperSlide>
          <div>
            <img
              className="md:w-2/3 lg:w-2/3 mx-auto rounded-xl relative"
              src="https://i.ibb.co/y4gpgjm/first-Banner-Image.jpg"
              alt=""
            />
            <p className="absolute bottom-0 lg:bottom-20 lg:text-2xl text-white bg-black p-4 rounded-xl md:left-24 lg:left-72 font-bold md:w-2/3 lg:w-1/2">
              Explore the artistry of Embroidery. From delicate stitches to
              vibrant threads, uncover the beauty of this timeless craft.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="md:w-2/3 lg:w-2/3 mx-auto rounded-xl relative"
              src="https://i.ibb.co/MPZHrXM/second-Banner-Img.jpg"
              alt=""
            />
            <p className="absolute bottom-0 lg:bottom-20 lg:text-2xl text-white bg-black p-4 rounded-xl md:left-24 lg:left-72 font-bold md:w-2/3 lg:w-1/2">
            Get wrapped up in Knitting & Crocheting. Discover the joy of creating warm and stylish pieces with your own hands.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-2/3 md:w-1/2 mx-auto rounded-xl relative"
              src="https://i.ibb.co/qpm53Vd/third-Banner-Img.jpg"
              alt=""
            />
            <p className="absolute bottom-0 lg:bottom-20 lg:text-2xl text-white bg-black p-4 rounded-xl md:left-24 lg:left-72 font-bold md:w-2/3 lg:w-1/2">
            Dive into the world of Quilting. From traditional patchwork to modern designs, find inspiration for your next quilt project.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
