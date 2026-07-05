import woman from "../../assets/woman_1.png";

function Reviews() {
  

  return (
    <section className="
    flex
    flex-col
  bg-gray-secondary 
    py-12

    lg:flex-row
    lg:items-center
    lg:jusify-center
      ">
      <div className="flex-center mb-10 order-0 rounded-full lg:hidden">
        <div className="
        rounded-full 
        overflow-hidden 
        max-w-[30%] 
        
        sm:max-w-[25%] 
        md:max-w-[20%]
        shadow-[0_0px_40px_#F6762C]">
          <img src={woman} alt="" className="w-full h-full"/>
        </div>
      </div>
      <div className="flex-center hidden lg:inline w-[50%]">

        <div className="
        flex-center
        rounded-full 
        overflow-hidden 
        max-w-[20%] 
        shadow-[0_0px_120px_-20px_#F6762C]
        

        outline-2
        outline-dashed
      outline-[#593825]
        outline-offset-60

        ">
          <img src={woman} alt="" className="w-full h-full"/>
        </div>
      </div>
      <div className="mx-auto flex max-w-md flex-col items-center text-center text-white order-1">
          <div className="
            flex
            justify-center
            items-center 
            rounded-full
            mb-6 
            h-10 
            w-10 
          bg-[#2a2522]
    
            md:h-15
            md:w-15
          ">
            <span className="text-6xl font-bold leading-none text-orange-main font-serif text-[80px] 
            mt-14 
            ml-[-10px]
            
            md:mt-18
            md:text-[110px]
            md:ml-[-20px]
            ">
            ”
            </span>
          </div>

          <p className="mb-6 max-w-sm text-base leading-snug text-white-main opacity-70 md:text-[18px]">
            Thanks a lot for the prompt service. Really appreciate. Excellence
            taste in Every Bite Add a joy of best Taste. Foodie Moments.
          </p>

          <div className="order-1">
            <h3 className="text-2xl font-bold text-white-main md:text-[30px]">
            Adele A. McNeill
            </h3>

            <p className="mt-1 text-xs uppercase text-white-main opacity-70 md:text-[18px]">
            AMIRICAN
            </p>
          </div>

      </div>
    </section>
  )
}

export default Reviews
