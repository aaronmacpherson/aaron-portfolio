import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import { getProjects } from "@/tools/DataManager";

export default async function Content() {
  const projects = await getProjects();

  return (
    <>
      <Home />
      <About />
      <Projects projects={projects} />
      <Footer />
    </>
  );
  
}