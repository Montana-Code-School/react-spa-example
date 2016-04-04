var React = require('react');
var FishBox = require('./FishComps/FishBox');
var FishJumbotron = require('./FishComps/FishJumbo');

require('./stylesheets/fish.scss');

var FishApp = React.createClass({
  render: function() {
      return (
        <div>
          <FishJumbotron />
          <FishBox />
        </div>
        )
  }
});

module.exports = FishApp;