import React from "react";
import "../Styles/skills.css";
import Dev from "../Components/Development";
import GDes from "../Components/Graphics";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">Technical Knowledge Level</span>
      <div className="skills_container container grid">
        <Dev />
        <GDes />
      </div>
    </section>
  );
};

export default Skills;
