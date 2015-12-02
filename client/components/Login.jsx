const { Link } = ReactRouter;

// Login Component
Login = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      users: Meteor.users,
      currentUser: Meteor.user()
    };
  },
  render() {
    return (
      <div className='row'>
        <h1 className='center-block'>Welcome to the Login Page</h1>
        <div className='col-md-8'>
          <form onSubmit={this._signin}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-footer">
              <button className="btn btn-primary btn-create-account">
                Create Account
              </button>
              <button className="btn btn-default btn-sign-in">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <LoginOptions/>
        <button className="btn btn-default btn-logout" onClick={this._logout}>
          Logout
        </button>
      </div>
    );
  },

  _signin(e) {
    const email = $(e.target).find("[name=email]").val();
    const password = $(e.target).find("[name=password]").val();
    const errors = {};

    if (!email) { errors.email = "Email required" }
    if (!password) { errors.password = "Password required"}
    this.setState({ errors });

    if(!R.isEmpty(errors)) { return; }

    Accounts.createUser({
      email : email,
      password : password,
      profile  : {
        slogan: 'booyahhh'
      }
    });
    // Accounts.loginWithPassword(email, password, (err) => {
    //   if (err) {
    //     console.log(err.reason);
    //     return;
    //   } else {
    //     debugger;
    //     ReactRouter.history.pushState(null, `/`);
    //   }
    // });
  },

  _logout() {
    e.preventDefault();
    Accounts.user && Meteor.logout();
  }

});
