import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./index.css";
import { SlogonCard } from "@modules/Cards";
import BannerAnim from "./BannerAnim";

const Plaza: React.FC = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-85% min-h-50vh border-#cacbcb border-1px border-solid">
      <Swiper
        className="w-full h-full"
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        loop
        pagination={{ clickable: true }}
        fadeEffect={{ crossFade: true }}
        onSlideChange={(swiper) => {
          setActiveId(swiper.realIndex || 0);
        }}
        slidesPerView={1}
      >
        <div>
          <SwiperSlide className="w-full h-full">
            <SlogonCard
              to="/create/profile"
              title="Create your profile"
              description="Whether an individual or a dynamic group, kickoff your journey in Allo ecosystem with a profile"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <SlogonCard
              to="/create/grant"
              title="Create your customized pools"
              description="Empowering your communities to determine the most effective and fittable approach for allocation and distribution of capital"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <SlogonCard
              to="/grants"
              title="Apply for grants"
              description="Explore potential grants to support your projects and get inspired for allocation strategies"
            />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="invisible md:visible border-#cacbcb border-l-1px border-l-solid">
        <BannerAnim activeId={activeId} />
      </div>
    </div>
  );
};

export default Plaza;
