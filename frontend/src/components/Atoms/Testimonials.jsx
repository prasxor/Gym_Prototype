import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jane D",
    role: "CEO",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly.",
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
    text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
  },
  {
    name: "Alex K.",
    role: "Design Lead",
    img: "https://pagedone.io/asset/uploads/1696230027.png",
    text: "The customer service team went above and beyond to help me resolve issues.",
  },
  {
    name: "Jane D",
    role: "CEO",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly.",
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
    text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
  },
  {
    name: "Alex K.",
    role: "Design Lead",
    img: "https://pagedone.io/asset/uploads/1696230027.png",
    text: "The customer service team went above and beyond to help me resolve issues.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-4  h-87">
        

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="h-85"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white border h-70 border-gray-300 rounded-xl p-6 transition hover:border-indigo-600 hover:shadow-sm">
                
                {/* Rating */}
                <div className="flex items-center mb-5 gap-2">
                  ⭐ <span className="text-indigo-600 font-semibold">4.9</span>
                </div>

                {/* Text */}
                <p className="text-gray-600  h-[45%] mb-6 group-hover:text-gray-800">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center bottom-0  gap-4 border-t p-4">
                  <img
                    src={item.img}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-medium text-gray-900">{item.name}</h5>
                    <span className="text-sm text-gray-500">
                      {item.role}
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide >
          ))}
        </Swiper>
      </div>
    </section>
  );
}