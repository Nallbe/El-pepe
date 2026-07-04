import Header from './header/Header';
import HeroContent from './heroContent/HeroContent'
import mainSectionImg from "../../assets/main-screen.jpg";

function HeroSection() {
  

  return (
    <div className="
      min-h-screen
      bg-no-repeat
      bg-cover
      
      max-lg: bg-position-[30%]"
      style={{ backgroundImage: `url(${mainSectionImg})` }}>
        <div className="
          flex 
          flex-col 
          justify-center 
          items-center 
          pt-3
          w-[75%]
          m-auto

          max-lg: w-[90%]
          ">
      <Header/>
      <HeroContent/>
        </div>
    </div>
  )
}

export default HeroSection
