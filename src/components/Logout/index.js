import './index.css'

const Logout = props => {
  const {changeStatus} = props
  return (
    <button type="button" className="login-button" onClick={changeStatus}>
      Logout
    </button>
  )
}
export default Logout
