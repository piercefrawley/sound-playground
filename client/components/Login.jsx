const { Link } = ReactRouter;

// App component - represents the whole app
Login = class MidiSynth extends React.Component {
  render() {
    return (
      <div>
        <p>This is the login page</p>
        <AccountsUIWrapper/>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}
