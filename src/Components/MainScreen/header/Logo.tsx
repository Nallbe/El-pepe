
type LogoProps = {
  className: string;
}

function Logo(props: LogoProps) {

  const {className} = props

  return (
    <img src="/img/logo_header.png" alt="Logo" className={className}/>
  )
}

export default Logo
