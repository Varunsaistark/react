import './index.css'

const Card = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <div className={className}>
      <h1 className="heading">{title}</h1>
      <p className="matter">{description}</p>
      <img className="img" src={imgUrl} alt="Not found" />
    </div>
  )
}

export default Card
