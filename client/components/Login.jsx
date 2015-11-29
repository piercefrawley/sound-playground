const { Link } = ReactRouter;

// Login Component
Login = React.createClass({
  render() {
    return (
      <div className='row'>
        <h1 className='center-block'>Welcome to the Login Page</h1>
        <div className='col-md-4'>
          <form id="sign-in-with-email" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label for="emailAddress">Email Address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-footer">
              <button type="submit" refs='create' className="btn btn-primary btn-create-account">
                Create Account
              </button>
              <button type="submit" refs='signin' className="btn btn-default btn-sign-in">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <LoginOptions/>
      </div>
    );
  },

  onSubmit(event) {
    const email = $(event.target).find("[name=email]").val();
    const password = $(event.target).find("[name=password]").val();
    const errors = {};

    if (!email) {
      errors.email = "Email required"
    }

    if (!password) {
      errors.password = "Password required"
    }

    this.setState({ errors });

    if(!R.isEmpty(errors)) { return; }

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({
          errors: {'none': err.reason}
        });
        return;
      } else {
        ReactRouter.history.pushState(null, `/`);
      }
    });
  }
});
