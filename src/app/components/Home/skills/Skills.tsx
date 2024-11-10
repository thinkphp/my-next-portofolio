import React from 'react'
import SkillsCard from './SkillsCard'
import SectionsHeading from '../../Helper/SectionsHeading'

function Skills() {
  return (
    <div className="bg-[#0f0715] pt-16 pb-16" id="skills">
      <SectionsHeading>My Skills</SectionsHeading>
      <SkillsCard />
    </div>
  )
}

export default Skills