import React from "react";
import Academic from "./Academic";

const AllAcademicAndOtherAcademic = () => {
  return (
    <div className="aboutSection_Height flex flex-col justify-center gap-5">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay="50"
      >
        <h2 className="text-2xl text-right font-semibold blue_color_font">
          Academic Qualifications
        </h2>
        <hr />
      </div>
      <div data-aos="flip-right" data-aos-delay="400" data-aos-offset="0">
        <Academic
          subject="Master's in Computer Science"
          institute="Jagannath University"
          start="2023"
          end="Present"
          className="flex-row-reverse"
        />
      </div>
      <div data-aos="flip-right" data-aos-delay="500" data-aos-offset="0">
        <Academic
          subject="bachelor's in Computer Science"
          institute="Dhaka International University"
          start="2017"
          end="2021"
          className="flex-row-reverse"
        />
      </div>
      <div data-aos="flip-right" data-aos-delay="600" data-aos-offset="0">
        <Academic
          subject="Alim - (HSC)"
          institute="Tamirul Millat Kamil Madrasah"
          start="2014"
          end="2016"
          className="flex-row-reverse"
        />
      </div>
      <div className="p-3"></div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay="700"
      >
        <h2 className="text-2xl text-right font-semibold blue_color_font">
          Other Qualifications
        </h2>
        <hr />
      </div>
      <div data-aos="flip-right" data-aos-delay="1000" data-aos-offset="0">
        <Academic
          subject="Web Development"
          institute="Programming Hero"
          className="flex-row-reverse"
        />
      </div>
      <div data-aos="flip-right" data-aos-delay="1100" data-aos-offset="0">
        <Academic
          subject="Graphics Design"
          institute="Softmax"
          className="flex-row-reverse"
        />
      </div>
    </div>
  );
};

export default AllAcademicAndOtherAcademic;
