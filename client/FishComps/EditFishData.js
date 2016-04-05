var React = require('react');

var EditFishData = React.createClass({
  //GET ONE FISHS DATA --> AJAX GET
  //PASS THAT STATE INTO FORM
  //USE FORM TO SHOW THAT DATA
  render: function() {
    return (
      <div>
        <h3> You have found EditFishData </h3>
        <p> Fish Id is: { this.props.id } </p>
      </div>
      )
  }
});

module.exports = EditFishData;