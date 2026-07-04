
type ButtonProps = {
  text: string;
}

function Button(props: ButtonProps) {

  const {text} = props

  return (
    <button className="
      uppercase 
      bg-orange-main
      text-orange-100
      font-medium
      rounded-md
      px-7
      py-3
      hover:bg-orange-400
      cursor-pointer
      transition duration-200
      w-full
      ">{text}</button>
  )
}

export default Button
