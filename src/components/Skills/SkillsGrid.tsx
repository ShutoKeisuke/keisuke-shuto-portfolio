import React from 'react';
import { SkillCard } from './SkillCard';
import { skills } from './data';

export const SkillsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} {...skill} index={index} />
      ))}
    </div>
  );
};