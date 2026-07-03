import LogoImg from "../../../assets/logo_header.png";


type LogoProps = {
  className: string;
}

function Logo(props: LogoProps) {

  const {className} = props

  return (
    <img src={LogoImg} alt="Logo" className={className}/>
  )
}

export default Logo
