var App = React.createClass({
  componentWillMount: function() {
    console.log('componentWillMount');
},
  componentDidMount: function() {
    console.log('componentDidMount');
},
  getInitialState: function(){
     return {
       count: 0
     }
  },
  increment: function(){
    this.setState({
      count: this.state.count+this.props.incrementVal
    });
  },

  decrement: function(){
    this.setState({
      count: this.state.count - this.props.incrementVal
    });
  },
componentWillUpdate: function(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
},

  render: function(){
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={this.increment}>+1</button>
        <button className="btn" onClick={this.decrement}>-1</button>
      </div>
    );
  }
});

var MultiButton = React.createClass({
  render : function (){
    return(
      <div>
      <App incrementVal={1}/>
      <App incrementVal={5}/>
      <App incrementVal={7}/>
      </div>
    );
  }
});


ReactDOM.render(<MultiButton />, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));
   }, 10000); 
