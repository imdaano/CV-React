import './App.css';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Curriculum from './components/CurriculumSections/Curriculum';
import { dataBase } from './dataBase/dataBase';

const { hero, curriculumSections, portfolio } = dataBase;

function App() {
  return (
    <div className="App">
      <Hero hero={hero}/>
      {/* <Curriculum curriculumSections={curriculumSections}/> */} {/* me rompe el código */}
      <Portfolio portfolio={portfolio}/>
    </div>
  );
}

export default App;