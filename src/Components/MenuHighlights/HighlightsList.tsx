import { HighlightsListMenu } from './domain'

function HighlightsList() {
  

  return (
    <section className="
      bg-gray-primary
      ">
      <div className="
        flex 
        flex-row 
        place-content-between
        w-[75%]
        py-25 
        m-auto
        
        max-xl:w-[90%]

        max-lg:w-full
        max-lg:place-content-around

        max-md:flex-wrap
        max-md:py-15
        ">
        {HighlightsListMenu.map(item => (
          <div className="
            flex 
            flex-col
            rounded-md
            w-[22%] 
            overflow-hidden
            
            max-xl:w-[24%]

            max-md:w-[48%]
            max-md:mt-4

            max-sm:w-[90%]
            
            
            ">
              <img alt="gallery" className="h-45 w-full object-cover" src={item.imgSrc}/>
              <div className="
                flex-1 
                py-7 
                bg-gray-main
                
                max-md:py-4">
			          <h1 className="
                text-white-main 
                  text-xl
                  title-font
                  font-medium 
                md:max-md:text-amber-300">{item.name}</h1>
                <h2 className="
                  tracking-widest 
                  text-sm title-font  
                text-white-main 
                  mt-3 
                  opacity-70
                  
                  ">{item.description}</h2>
              </div>
          </div>
      ))}

      </div>
    </section>
  )
}

export default HighlightsList
