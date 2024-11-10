// import { projectData } from "@/app/Data/data"
import SectionsHeading from "../../Helper/SectionsHeading"
import ProjectCard from "./ProjectCard"

function Project() {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]" id="projects">
      <SectionsHeading>My Projects</SectionsHeading>
      <ProjectCard />
    </div>
  )
}

export default Project