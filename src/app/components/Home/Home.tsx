import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./Hero/Hero";
import Project from "./project/Project";
import Service from "./service/Service";
import Skills from "./skills/Skills";

function Home() {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home;