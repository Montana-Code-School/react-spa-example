var React = require('react');
var FishList = require('./FishList');
var FishForm = require('./FishForm');
// FishBox
//  Toggler
//  FishList
//    FishCard
//  FishForm

var Toggler = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="btn-group" data-toggle="buttons">
            <button onClick={this.props.toggleActiveComp.bind(null, 'fish')}> Fish Display </button>
            <button onClick={this.props.toggleActiveComp.bind(null, 'form')}> Modify Fish </button>
        </div>
      </div>
      )
  }
});


var FishBox = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'fish',
      fishArray: null
      }
  },
  showComp: function() {
    /* THIS FUNCTION RENDERS ONE COMPONENT 
    BASED ON activeComp State*/
    if(this.state.activeComponent === 'fish'){
      return <FishList fishArray={ this.props.fishArray }/>
    } else if (this.state.activeComponent === 'form') {
      return <FishForm />
    } else {
      return <FishList fishArray={ this.props.fishArray }/>
    }
  },
  toggleActiveComp: function(name) {
    this.setState({activeComponent: name})
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
  render: function() {
    return (
      <div className="container myContainer">
        <Toggler toggleActiveComp={ this.toggleActiveComp }/>
          if(this.state.fishArray) {
              return (
                <div>
                  <Jumbotron />
                  <FishBox fishArray={ this.state.fishArray } />
                </div>
                )
            } else {
              return <Loader/>
            }
                { this.showComp() }
              </div>     
              )
          }
});

module.exports = FishBox;