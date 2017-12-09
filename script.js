var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    pic: 'https://i.pinimg.com/564x/8f/f6/0f/8ff60f020b18bd5468193fbffebcb33c.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    pic: 'https://eu.movieposter.com/posters/archive/main/122/MPW-61047'
  },
  {
    id: 3,
    title: 'Alwin i wiewiorki',
    desc: 'Film o królu sawanny',
    pic: 'http://gdj.graphicdesignjunction.com/wp-content/uploads/2011/12/alvin-and-the-chipmunks-chipwrecked-movie-poster.jpg'
  },
    {
    id: 4,
    title: 'Piękna i Bestia',
    desc: 'Film o królu sawanny',
    pic: 'http://gdj.graphicdesignjunction.com/wp-content/uploads/2011/12/beauty-and-the-beast-movie-poster.jpg'
  },
    {
    id: 5,
    title: 'Ice Age',
    desc: 'Film o królu sawanny',
    pic: 'http://gdj.graphicdesignjunction.com/wp-content/uploads/2011/12/ice-age-continental-drift-movie-poster.jpg'
  },
  
];

var Movie = React.createClass({
   propTypes: {
      moviesElem: React.PropTypes.object.isRequired,
   },
   render: function() {
      return (
         React.createElement('li', {},
         React.createElement(MovieTitle, {title: this.props.moviesElem.title }),
         React.createElement(MovieDesc, {desc: this.props.moviesElem.desc }),
         React.createElement(MoviePic, {pic: this.props.moviesElem.pic })
         )
      )
   }
}); 

var MovieList = React.createClass({ 
   propTypes: {
      movielist: React.PropTypes.array.isRequired,
   },
   render: function () {
      var test = this.props.movielist.map(function (movie) {
         return React.createElement(Movie, {
            key: movie.id,
            movieElement: movie
            })
      });
   return (
      React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmow'),
      React.createElement('ul', {}, test)
      )
   )
   },
});

var MovieTitle = React.createClass({
   propTypes: {
      title: React.PropTypes.string.isRequired,
   },
   render: function () {
      return React.createElement('h2', {}, this.props.title);
   }
});    

var MovieDesc = React.createClass({
   propTypes: {
      desc: React.PropTypes.string.isRequired,
   },
   render: function () {
      return React.createElement('p', {}, this.props.desc);
   }
});    
       
var MoviePic = React.createClass({
   propTypes: {
      pic: React.PropTypes.string.isRequired,
   },
   render: function () {
      return React.createElement('img', {src: this.props.poster});
   }
});    

var element = React.createElement(MovieList, {movielist: movies});
ReactDOM.render(element, document.getElementById('app'));

