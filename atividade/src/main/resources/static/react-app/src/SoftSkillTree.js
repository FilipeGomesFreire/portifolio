import React from "react";
import ProfileCard from "./ProfileCard"; // Importa o ProfileCard já existente
import "./SkillTree.css"; 
import PlacaEscrita from "./PlacaEscrita";

const skills = [
  { id: 1, name: "Dynamism/Adaptability", imageUrl: "DynamismAdaptability.png", progress: 10 },
  { id: 2, name: "Effective Communication", imageUrl: "EffectiveCommunication.png", progress: 8 },
  { id: 3, name: "Problem Solving", imageUrl: "ProblemSolving.png", progress: 9 },
  { id: 3, name: "Teamwork", imageUrl: "Teamwork.png", progress: 7 },
  { id: 3, name: "Focus on Results", imageUrl: "FocusResults.png", progress: 8 },
  { id: 3, name: "Organization and Agility", imageUrl: "OrganizationAgility.png", progress: 8 },

  // Adicione mais habilidades conforme necessário
];

function SoftSkillTree() {
  return (
    
<div className="hard-skill-tree">

<PlacaEscrita className="placa-escrita" nome="Soft SKILLS" />

      {skills.map(skill => (
        <ProfileCard
          key={skill.id}
          name={skill.name}
          imageUrl={skill.imageUrl}
          progress={skill.progress}
        />
      ))}
    </div>
  );
}

export default SoftSkillTree;
