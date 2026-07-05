import { MainPositionItems } from "./domain";
import Button from "../Button";

function MainPositions() {
  return (
    <section className="bg-gray-secondary py-15">
      <div className="
      mx-auto 
      flex 
      flex-col 
      w-[90%] 
      gap-10
      
      lg:flex-row
      lg:flex-wrap">
        {MainPositionItems.map((item) => (
          <div
            key={item.title}
            className="
              overflow-hidden
              rounded-md
              bg-gray-main

              sm:min-h-80
              sm:bg-cover
              sm:bg-center
              lg:w-[47%]">
            <div 
            style={{ backgroundImage: `url(${item.imgSrc})` }}
            className={`
                flex
                h-full
                min-h-80
                flex-col
                bg-cover
                bg-no-repeat
                bg-position-[25%]

                sm:flex-row
                lg:bg-position-[85%]
                ${item.position === "right" ? "sm:justify-end" : "sm:justify-start"}`}>
              <div
                className="
                  flex
                  min-h-80
                  w-full
                  flex-col
                  justify-center
                  px-6
                  text-center
              
                  sm:w-[45%]
                  sm:text-left

                  lg:w-[50%]
                  xl:pl-13
                  2xl:pl-15">
                <h2 className="
                text-[40px] 
                font-medium 
                text-white-main
                
                lg:text-[30px]">
                  {item.title}
                </h2>
                <p className="mt-4 max-w-md text-white-main opacity-70 hidden lg:block">
                  {item.description}
                </p>
                <div className="mt-5 flex items-center justify-center gap-2 sm:justify-start">
                  <span className="text-[30px] font-medium text-orange-main">
                    ${item.salePrice}
                  </span>
                  <span className="text-[20px] font-medium text-orange-main opacity-50 line-through">
                    ${item.oldPrice}
                  </span>
                </div>
                <div className="mx-auto mt-5 w-[65%] sm:mx-0 sm:w-45 lg:w-40">
                  <Button text="order now"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainPositions;