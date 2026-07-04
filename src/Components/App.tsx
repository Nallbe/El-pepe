import HeroSection from "./HeroSection/HeroSection";
import MenuHighlights from './MenuHighlights/HighlightsList';
import MainDish from './MainDish/MainDish';



function App() {
  return (
   <div className="
    container 
    mx-auto
    
    max-lg:max-w-full
    ">
      <HeroSection/>
      <MenuHighlights/>
      <MainDish/>
    </div>
  );
}

export default App;
