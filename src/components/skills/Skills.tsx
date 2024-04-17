import React, { FC } from "react";

interface Skills {
  logo?: string;
  title: string;
  Level: number;
}

const Skills: FC<Skills> = ({ logo, title, Level }) => {
  return (
    <div>
      <h3 className="font-bold text-xl blue_color_font">{title}</h3>
      <h4 className="font-light text-xl">{Level}</h4>
    </div>
  );
};

export default Skills;
