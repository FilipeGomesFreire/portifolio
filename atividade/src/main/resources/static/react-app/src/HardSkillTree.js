import React from "react";
import ProfileCard from "./ProfileCard"; // Importa o ProfileCard já existente
import "./SkillTree.css"; 
import PlacaEscrita from "./PlacaEscrita";

const skills = [
  { id: 1, name: "HTML/CSS/JavaScript", imageUrl: "/ImgJS.png", progress: 8 },
  { id: 2, name: "React", imageUrl: "ImgReact.png", progress: 5 },
  { id: 3, name: "Photoshop", imageUrl: "ImgPs.png", progress: 7 },
  { id: 4, name: "Git/Github", imageUrl: "ImgGit.png", progress: 7 },
  { id: 5, name: "Scrum", imageUrl: "ImgScrum.png", progress: 6 },
  { id: 6, name: "Python", imageUrl: "ImgPython.png", progress: 7 },
  { id: 7, name: "Excel", imageUrl: "ImgExcel.png", progress: 8 },
  { id: 8, name: "Flutter/Dart", imageUrl: "ImgFlutter.png", progress: 4 },
  // Adicione mais habilidades conforme necessário
];

function HardSkillTree() {
  return (
    <div className="hard-skill-tree">
      <PlacaEscrita className="placa-escrita" nome="HARD SKILLS" />
      <div className="skills-list">
        {skills.map(skill => (
          <ProfileCard
            key={skill.id}
            name={skill.name}
            imageUrl={skill.imageUrl}
            progress={skill.progress}
          />
        ))}
      </div>
    </div>
  );
}

export default HardSkillTree;
