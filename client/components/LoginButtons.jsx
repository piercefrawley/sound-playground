LoginButtons = class LoginButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
    const { open } = this.state;
    console.log(open);
    return (
      <div className="row">
        <div><h3>Sign In</h3></div>
        {open ? (
          <ul className="btn-list" onMouseLeave={() => this.setState({open:false})}>
            <li>
              <button type="button" className="btn btn-social-login btn-success" data-toggle="modal" data-target="#sign-in-with-email-modal">
                <i className="fa fa-envelope"/> Sign in with Email
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-social-login btn-success">
                <i className="fa fa-facebook"/> Sign in with Facebook
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-social-login btn-google btn-success">
                <i className="fa fa-google"/> Sign in with Google
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-social-login btn-github btn-success">
                <i className="fa fa-github"/> Sign in with GitHub
              </button>
            </li>
          </ul>
        ) : (
          <button className="btn btn-social-login btn-github btn-info" onMouseOver={() => this.setState({open:true})}>
            <i className="fa fa-users"/> Login
          </button>
        )}
      </div>
    )
  }
}
