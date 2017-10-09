var React = require('react');
var ReactDOM = require('react-dom');



  var Movie = React.createClass({
    propTypes: {
    movies: React.PropTypes.object.isRequired,
  },
      render: function(){
          return(
            React.createElement('div', {},
              React.createElement('h2', {}, this.props.film.id},
              React.createElement('h2', {}, this.props.film.title},
              React.createElement('p', {}, this.props.film.desc},
              React.createElement('img', this.props.film.pic}
            );

      }
  
  });
var element = React.createElement(Movie, {key: movies_id, movies_title, movies_desc, movies_src},);
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'https://i.pinimg.com/564x/8f/f6/0f/8ff60f020b18bd5468193fbffebcb33c.jpg'
  },
];
ReactDOM.render(element, document.getElementById('app'));
