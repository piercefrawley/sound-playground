App = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});