import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getProjects } from "@/tools/DataManager";

export default async function Content() {
  const projects = await getProjects();

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Footer />
    </>
  );
  
}