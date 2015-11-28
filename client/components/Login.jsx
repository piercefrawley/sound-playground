const { Link } = ReactRouter;

// Login Component
Login = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },
  render() {
    return (
      <div>
        <p>This is the login page</p>
        <h2>Register</h2>
        <form className="register" onSubmit={this._handleSubmit} >
            <p>Emai:
              <input
                type="text"
                ref="textInput"/>
            </p>
            <p>Password: <input type="password" name="password"/></p>
            <p><input type="submit" value="Register"/></p>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="page-header"><h3>Sign In</h3></div>
                <ul className="btn-list">
                  <li>
                    <button type="button" className="btn btn-social-login btn-github">
                      <i className="fa fa-github"></i> Sign in with GitHub
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-social-login btn-google">
                      <i className="fa fa-google"></i> Sign in with Google
                    </button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-social-login btn-success" data-toggle="modal" data-target="#sign-in-with-email-modal">
                      <i className="fa fa-envelope"></i> Sign in with Email
                    </button>
                  </li>
                </ul>
              </div>
          </div>
        </form>

        <Link to="/">Go Home</Link>
      </div>
    );
  },

  _handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();
    debugger;
    Users.insert({
      email: e.target.value,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  }
});
