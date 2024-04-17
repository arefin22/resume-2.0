import React, { FC } from "react";

interface Academic {
  subject: string;
  institute: string;
  start?: string;
  end?: string;
  className?: string;
}

const Academic: FC<Academic> = ({ subject, institute, start, end, className }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="h-5 w-5 rounded-full mt-[3px] blue_color_background"></div>
      <div className="flex flex-col justify-end text-right ">
        <h3 className="font-bold text-xl blue_color_font">{subject}</h3>
        <h4 className="font-light text-xl">{institute}</h4>
        <h4 className="font-extralight">
          {start} - {end}
        </h4>
      </div>
    </div>
  );
};

export default Academic;
