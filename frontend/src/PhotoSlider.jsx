import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWUzagqmc-6BkioLKLhzpDLNAf7eCWR7B8w&s",
  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN190ZWVuX3dlYXJpbmdfY2FzdWFsX2Nsb3RoZXNfbW9kZXJuX2hvbGRpbmdfYm9va19jMDk3OTczNC1kYzY5LTQyZjktOThhMC00MzlmN2FjNmIxZTJfMS5wbmc.png",
  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV8zZF9yZW5kZXJfY2hhcmFjdGVyX29mX2Ffd29tYW5fd2VhcmluZ19iYWNrcF81YzVlOTc1Zi0xNjhkLTQwYWQtYjgzMC0zZTJkMTI3Mjk3MDUucG5n.png",
];

const ImageSlider = () => {
  return (
    <div className="w-full flex justify-center mt-10 me-5">
      <Swiper
        modules={[Autoplay, EffectFade, Zoom]}
        effect="fade"
        zoom={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ width: "350px", height: "450px", overflow: "hidden" }} // +50px from before
        className="rounded-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="swiper-zoom-container"
              style={{
                width: "400px", // +50px from before
                height: "400px", // +50px from before
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
