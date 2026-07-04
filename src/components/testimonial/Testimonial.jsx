import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "A dedicated and enthusiastic student who shows great potential in software development.",
    quote: `Tamilarasan demonstrates strong problem-solving skills and a genuine passion for learning new technologies. His commitment to continuous improvement is commendable.`,
    name: "Faculty Member",
    designation: "Computer Science Department",
  },
  {
    message:
      "Quick learner with excellent collaboration skills and positive attitude.",
    quote: `Works well in team projects and is always eager to take on new challenges. Shows great adaptability and flexibility in different learning environments.`,
    name: "Project Guide",
    designation: "Technical Mentor",
  },
  {
    message:
      "Demonstrates responsibility and orderly approach to academic work.",
    quote: `Consistently shows dedication to improving programming skills and staying updated with new technologies. A reliable and motivated student with strong work ethic.`,
    name: "Academic Advisor",
    designation: "Engineering College",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
