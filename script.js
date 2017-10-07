
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
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.pic} )                       
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));