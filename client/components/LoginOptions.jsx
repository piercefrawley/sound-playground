LoginOptions = class LoginOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
    const { open } = this.state;

    return (
      <div className="col-md-4">
        {open ? (
          <ul className="btn-list" onMouseLeave={() => this.setState({open:false})}>
            <li>
              <button
                type="button"
                onClick={() => this._login('google')}
                className="btn btn-social-login btn-google btn-success">
                <i className="fa fa-google"/> Sign in with Google
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => this._login('github')}
                className="btn btn-social-login btn-github btn-success">
                <i className="fa fa-github"/> Sign in with GitHub
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => this._login('facebook')}
                className="btn btn-social-login btn-success">
                <i className="fa fa-facebook"/> Sign in with Facebook
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => this._login()}
                className="btn btn-social-login btn-success"
                data-toggle="modal" data-target="#sign-in-with-email-modal">
                <i className="fa fa-envelope"/> Sign in with Email
              </button>
            </li>
          </ul>
        ) : (
          <button className="btn btn-social-login btn-github btn-info" onMouseOver={() => this.setState({open:true})}>
            <i className="fa fa-users"/> Other Login Options
          </button>
        )}
      </div>
    )
  }

  _login(provider) {
    const cb = error => { error && console.log(error.reason)};
    switch(provider) {
      case 'google':
        Meteor.loginWithGoogle({requestPermissions: ['email']}, cb);
        break;
      case 'github':
        Meteor.loginWithGithub({requestPermissions: ['email']}, cb);
        break;
      case 'facebook':
        Meteor.loginWithFacebook({requestPermissions: ['email']}, cb);
        break;
      default:
        this._loginWithEmail();
    }
  }

  _loginWithEmail() {

  }
}
