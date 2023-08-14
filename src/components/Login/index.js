import './index.css'

const Login = props => {
  const {changeStatus} = props
  return (
    <button type="button" className="login-button" onClick={changeStatus}>
      Login
    </button>
  )
}
export default Login
