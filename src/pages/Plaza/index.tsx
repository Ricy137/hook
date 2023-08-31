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
    <div className="mt-40px sm:mt-0px grid grid-cols-1 md:grid-cols-2 w-85% min-h-70vh xl:min-h-60vh 2xl:min-h-50vh border-#cacbcb border-1px border-solid">
      <Swiper
        className="w-full"
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
        <div className="w-full h-full relative">
          <SwiperSlide className="w-full h-full">
            <SlogonCard
              to="/create/profile"
              title="Create your profile"
              description="Whether an individual or a dynamic group, kickoff your journey in Allo ecosystem with a profile"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <SlogonCard
              to="/explorer"
              title="Explore the ecosystem"
              description="Unveil profiles connected by addresses and lens network for informed grant Decisions"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <SlogonCard
              outsideLink
              to="https://discord.gg/9uFtydu4"
              title="Join the community"
              description="We're an open-source, on-going project. Join our discord to get the latest news and collaborate together"
            />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="hidden md:block border-#cacbcb border-l-1px border-l-solid">
        <BannerAnim activeId={activeId} />
      </div>
    </div>
  );
};

export default Plaza;
