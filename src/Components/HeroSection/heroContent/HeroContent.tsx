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

      max-2xl:mt-40
      max-lg:mt-30

      max-[450px]:text-center
      ">
      <span className="
        text-mist-100
        font-medium
        mb-2
        w-full
        
        max-[450px]:text-center"
        >FAST FOOD BURGERS
      </span>
      <h2 className="
      text-mist-100
        font-medium
        leading-15
        text-[57px]
        max-w-142
        mb-7

        max-lg:text-[40px]
        max-lg:max-w-88
        max-lg:leading-12
      ">The fastest food, for instant hunger.</h2>
      <p className="
        max-w-118
        leading-5
      text-mist-400
        mb-10

        max-lg:max-w-90"
        >Some food has looked so awful th at it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words & my food and gone back for seconds.</p>
      <div className="
        min-[651px]:max-lg:w-[40%]
        max-[650px]:w-full">
        <Button 
        text={"order now"}
      />
      </div>
    </section>
  )
}

export default HeroContent
