import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Tools from "./components/Tools/tools"
import Contact from "./components/Contatct/contact";
import Footer from './components/Footer/footer'
import data from "./data";
import Card from "./components/Certificates/card"
import './components/Certificates/card.css'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})    

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Tools />
      <Projects />
      <div className="cercertificatesTitleConteiner"><h1 className="certificatesTitle"> Certificates</h1>
      <section className="cards-list">
        {cards}
      </section>
      </div>

      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
