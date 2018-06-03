var React = require('react');
var ReactDOM = require('react-dom');



var MathInterface = React.createClass({
  getInitialState: function() {
    return {
      math: []
    } // return
  }, // getInitialState

  componentDidMount: function() {
    this.serverRequest= $.get('./js/math.json', function(result) {
      let mathData = result;
      // console.log(mathData);
      this.setState({
        math: mathData
      }); // setState
    }.bind(this)); // jQuery GET call
  },

  render: function() {
    var funnyMath = this.state.math;
    // console.log(this.state.math[3]);
    funnyMath = funnyMath.map(function(item, index) {
      return (
        <li className="pet-item media" key={index}>
              <div className="pet-info media-body">
                <div className="pet-head">
                  <span className="pet-name">{this.state.math[index].q}</span>
                  <span className="apt-date pull-right">{this.state.math[index].ease}</span>
                </div>
                <div className="owner-name">
                  <span className="label-item">Topic: </span>
                  {this.state.math[index].topic}
                </div>
                <div className="apt-notes">
                  <b>A:</b> {this.state.math[index].options.A} <br />
                  <b>B:</b> {this.state.math[index].options.B} <br />
                  <b>C:</b> {this.state.math[index].options.C} <br />
                  <b>D:</b> {this.state.math[index].options.D} <br />
                </div>
              </div>
            </li>
      )
    }.bind(this)); // funnyMath.map

    return (
      <div className="my-list">
        <ul className="item-list media-list">
        {funnyMath}
        </ul>
      </div>
      
    ); // return

  }, // render
}); // MathInterface


ReactDOM.render(
  <MathInterface />,
  document.getElementById('ourMath')
); // render

