import AllAcademicAndOtherSkills from "@/components/skills/AllAcademicAndOtherSkills";
import AllSkillsIHave from "@/components/skills/AllSkillsIHave";
import Skills from "@/components/skills/Skills";

const about = () => {
  return (
    <div className="bg-white hight flex flex-row justify-between">
      <div className="w-8/12 mx-auto flex flex-row justify-center gap-2">
        {/* skills and academic sections */}
        <div className="aboutSection_Height flex flex-col justify-center gap-5">
          <AllAcademicAndOtherSkills />
        </div>

        {/* devider between skills */}
        <div className=" aboutSection_Height blue_color_background mx-6 w-1"></div>

        {/* skills in details section */}
        <div className="aboutSection_Height flex flex-col justify-center gap-5">
          <AllSkillsIHave />
        </div>
      </div>
    </div>
  );
};

export default about;
