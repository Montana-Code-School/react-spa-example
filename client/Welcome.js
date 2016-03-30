var React = require('react');

var Welcome = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Welcome To My Site</h1>
        <p className="lead">This is a demo for toggling components using React</p>
        <hr className="m-y-2"/>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">This Button Does Nothing</a>
        </p>
      </div>
      )
  }
});

module.exports = Welcome;