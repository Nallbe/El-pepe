import Header from './header/Header';
import HeroContent from './heroContent/HeroContent'

function HeroSection() {
  

  return (
    <div className="
      flex 
      flex-col 
      justify-center 
      items-center 
      pt-3
      w-[75%]
      m-auto
      ">
      <Header/>
      <HeroContent/>
    </div>
  )
}

export default HeroSection
