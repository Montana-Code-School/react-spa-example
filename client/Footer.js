var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-fixed-bottom navbar-light bg-faded">
        <a className="navbar-brand" href="#">Some Fake Contact Info</a>
      </nav>
      )
  }
});

module.exports = Footer;