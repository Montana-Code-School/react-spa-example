var React = require('react');
var FishBox = require('./FishComps/FishBox');

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Do you know about fish?</h1>
        <p className="lead">Well... let me tell you about cookies</p>
        <hr className="m-y-2"/>
      </div>
      )
  }
});

var Loader = React.createClass({
  render: function(){
    return (
      <div>
        <i className="fa fa-modx fa-6 fa-spin myFont center-block"></i>
      </div>
      )
  }
});

var FishData = React.createClass({
  getInitialState: function() {
    return {
      fishArray: null
    }
  },
  loadAllFishFromServer: function() {
    //GO GET ALL FISH FROM SERVER
    var self = this;
    $.ajax({
      url: '/api/fish' ,
      method: 'GET'
    }).done(function(data){
      //UPDATE FISH STATE WITH DATA
      setTimeout(function(){
        self.setState({fishArray: data})
      }, 1000);
    })
  },
  componentDidMount: function() {
    this.loadAllFishFromServer();
  },
});

module.exports = FishApp;