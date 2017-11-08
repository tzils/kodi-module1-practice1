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
      count: this.state.count + 1
    });
  },

  decrement: function(){
    this.setState({
      count: this.state.count - 1
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

ReactDOM.render(<App/>, document.getElementById('app'));
setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);