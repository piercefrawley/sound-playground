const { Link } = ReactRouter; 

// App component - represents the whole app
Login = React.createClass({
  render() {
    return (
      <div>
        <p>This is the login page</p>
        <AccountsUIWrapper/>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
});