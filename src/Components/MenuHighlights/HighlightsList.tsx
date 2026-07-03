import { HighlightsListMenu } from './domain'

function HighlightsList() {
  

  return (
    <section className="
      flex 
      justify-between
      items-center
      bg-gray-primary
      ">
      <div className="flex flex-row place-content-between py-27 w-[75%] m-auto ">
        {HighlightsListMenu.map(item => (
          <div className="flex flex-col w-65 overflow-hidden rounded-md">
              <img alt="gallery" className="h-45 w-full object-cover" src={item.imgSrc}/>
              <div className="flex-1 py-7 bg-gray-main">
			          <h1 className="title-font text-xl font-medium text-gray-text mb-3">{item.name}</h1>
                <h2 className="tracking-widest text-sm title-font  text-gray-text mb-1 opacity-70">{item.description}</h2>
              </div>
          </div>
      ))}

      </div>
    </section>
  )
}

export default HighlightsList
