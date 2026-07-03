import { cn } from "../utils/cn";
import HeroSection from "./MainScreen/HeroSection";
import mainSectionImg from "../assets/main-screen.jpg";

function App() {
  return (
    <div
      className={cn("min-h-screen bg-cover bg-no-repeat")}
      style={{ backgroundImage: `url(${mainSectionImg})` }}
    >
      <HeroSection />

      <div className="flex-center border-vadim size-[400px] border-5 bg-amber-500">
        <div className="bg-vadim size-[100px] rounded-full">123123123123</div>
      </div>
    </div>
  );
}

export default App;
