import './index.css'

const Message = props => {
  const {greeting} = props
  return <h1 className="message-heading">{greeting}</h1>
}

export default Message
