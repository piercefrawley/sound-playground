const { Link } = ReactRouter;

// Login Component
Login = class Login extends React.Component {
  render() {
    return (
      <div className='row'>
        <h1 className='center-block'>Welcome to the Login Page</h1>
        <h3>Register</h3>
        <form className="register" onSubmit={this._handleSubmit} >
          <p>Email: <input type="text" ref="email"/></p>
          <p>Password: <input type="password" ref="password"/></p>
          <p><input type="submit" value="Register"/></p>
        </form>
        <LoginButtons/>
      </div>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();
    
    Users.insert({
      email: e.target.value,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  }
};
