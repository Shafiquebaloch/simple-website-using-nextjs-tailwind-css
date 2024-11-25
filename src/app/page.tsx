import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";



export default function Home() {
  return (
    <div>
                <Hero />
                <About/>
                <Services/>
                <Contact/>
    </div>
  );
}
