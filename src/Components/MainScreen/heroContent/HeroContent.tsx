import Button from "../../Button"

function HeroContent() {
  

  return (
    <section className="
      items-start
      flex 
      justify-between
      text-left
      flex-col 
      p-6 
      mt-60
      w-full
      ">
      <span className="
        text-mist-100
        font-medium
        mb-2
      ">FAST FOOD BURGERS</span>
      <h2 className="
        text-mist-100
        font-medium
        leading-15
        text-[57px]
        max-w-[570px]
        mb-7
      ">The fastest food, for instant hunger.</h2>
      <p className="
      max-w-[470px]
      leading-5
      text-mist-400 
      mb-10
      ">Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words & my food and gone back for seconds.</p>
      <Button 
        text={"order now"}
      />
    </section>
  )
}

export default HeroContent
