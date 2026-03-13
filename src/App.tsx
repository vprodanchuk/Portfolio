import './App.css'
import Header from "./components/Header.tsx";
import TechStack from "./components/TechStack.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
