import burgerImg from '../../assets/burger.png'
import Button from '../Button';
function MainDish() {
  

  return (
    <section className="bg-gray-main">
      <div className="
        flex
        flex-col
        py-10
        mx-auto

        md:flex-row
        lg:w-[90%]
        lg:py-5

        xl:justify-around
        ">
        <div className="flex-center w-full lg:flex-1">
          <img 
            src={burgerImg} 
            alt="Delicious Burger Image" 
            className='
              sm:max-w-[70%]
              md:max-w-full
          '/>
        </div>
        <div className="
          flex
          flex-col
          items-center
          justify-center
          lg:flex-1
          lg:items-start
          xl:pl-20
          ">
            <h2 className="
            text-white-main
              text-[40px]
              font-medium
              mt-5
              ">Burger King</h2>
            <p className="
            text-white-main
              opacity-70
              w-[80%]

              md:max-w-[50%]
              
              lg:max-w-[55%]
              lg:text-left
              lg:mt-5
            "
            >Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.</p>
            <div className="
              flex-center
              my-5 
              w-[50%]  
              gap-2
              
              lg:justify-start
              lg:my-2">
              <span className="
              text-orange-main
                font-medium
                text-[40px]

                lg:text-[30px]
              ">$6</span>
              <span className="
              text-orange-main
                font-medium
                text-[25px]
                line-through
                opacity-50

                lg:text-[20px]
              ">$8</span>
            </div>
            <div>
              <Button
                text={"order now"}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MainDish
