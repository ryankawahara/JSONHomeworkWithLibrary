import Glide from '@glidejs/glide'

new Glide('.glide').mount()

let movieGrid;
window.addEventListener('DOMContentLoaded', function(){

 movieGrid = document.getElementById("mcuMovieGrid");

for (let i=0; i<mcuMovieDatabase.length; i++){
  organizeJSON(mcuMovieDatabase[i]);
  // console.log(mcuMovieDatabase[i]['Title']);
  // writeToPage(mcuMovieDatabase[i]['Title']+'\n',movieGrid);

}

// for (let i=0; i<11; i++){
//   let listOfMovies = document.createElement("p");
//   listOfMovies.innerText="hi";
//   movieGrid.appendChild(listOfMovies);
// }




// alert("loaded");

});







let mcuMovieDatabase = [
  {
    "Title" : "Iron Man",
    "Release date":"May 2, 2008",
    "Director": "Jon Favreau",
    "DirectorLink":"https://www.imdb.com/name/nm0269463/",
    "Budget" : "$140 million",
    "Box Office":"$585.3 million",
    "posterSource":"IronMan.jpeg",
    "movieLink":"https://www.disneyplus.com/movies/marvel-studios-iron-man/6aM2a8mZATiu",
    "trailerLink": "https://www.youtube.com/embed/8ugaeA-nMTc",
    "synopsis":"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "specificStyleSheet":"IronManStyles",
    "cast":["Robert Downey Jr.","Terrence Howard","Jeff Bridges","Gwyneth Paltrow"],

  },

  {
    "Title" : "The Incredible Hulk",
    "Release date":"June 13, 2008",
    "Director": "Louis Leterrier",
    "DirectorLink":"https://www.imdb.com/name/nm0504642/",
    "Budget" : "$150 million",
    "Box Office":"$264.8 million",
    "posterSource":"Hulk.jpeg",
    "cast":["Edward Norton","Liv Tyler","Tim Roth","William Hurt"],
    "movieLink":"https://www.amazon.com/Incredible-Hulk-Edward-Norton/dp/B001IAME78",
    "trailerLink":"https://www.youtube.com/embed/xbqNb2PFKKA",
    "synopsis":"Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    "specificStyleSheet":"HulkStyles"



  },
  {
    "Title" : "Iron Man 2",
    "Release date":"May 7, 2010",
    "Director": "Jon Favreau",
    "DirectorLink":"https://www.imdb.com/name/nm0269463/",
    "Budget" : "$200 million",
    "Box Office":"$623.9 million",
    "cast":["Robert Downey Jr.","Gwyneth Paltrow","Don Cheadle","Scarlett Johansson","Mickey Rourke"],
    "posterSource":"IronMan2.jpeg",
    "trailerLink":"https://www.youtube.com/embed/BoohRoVA9WQ",
    "movieLink":"https://www.disneyplus.com/movies/marvel-studios-iron-man-2/lXjCr9QmGGQJ",
    "synopsis":"With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    "specificStyleSheet":"IronMan2Styles"



  },
  {
    "Title" : "Thor",
    "Release date":"May 2, 2011",
    "Director": "Kenneth Branagh",
    "DirectorLink":"https://www.imdb.com/name/nm0000110/",
    "Budget" : "$150 million",
    "Box Office":"$449.3 million",
    "posterSource":"Thor.jpeg",
    "movieLink":"https://www.disneyplus.com/movies/marvel-studios-thor/1p4vdKzTuhzr",
    "cast":["Chris Hemsworth","Natalie Portman","Tom Hiddleston","Anthony Hopkins","Idris Elba"],
    "synopsis":"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    "trailerLink":"https://www.youtube.com/embed/JOddp-nlNvQ",
    "specificStyleSheet":"ThorStyles"

  },
  {
    "Title" : "Captain America: The First Avenger",
    "Release date":"July 19, 2011",
    "Director": "Joe Johnston",
    "DirectorLink":"https://www.imdb.com/name/nm0002653/",
    "Budget" : "$140 million",
    "movieLink":"https://www.disneyplus.com/movies/marvel-studios-captain-america-the-first-avenger/6xvB6xZ4r95O",
    "Box Office":"$370.6 million",
    "posterSource":"CaptainAmerica.jpeg",
    "cast":["Chris Evans","Hugo Weaving","Samuel L. Jackson","Hayley Atwell","Sebastian Stan"],
    "synopsis":"Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
    "trailerLink":"https://www.youtube.com/embed/JerVrbLldXw",
    "specificStyleSheet":"CaptainAmericaStyles"


  },
  {
    "Title" : "The Avengers",
    "Release date":"May 4, 2012",
    "Director": "Joss Whedon",
    "DirectorLink":"https://www.imdb.com/name/nm0923736/",
    "Budget" : "$220 million ",
    "Box Office":"$1.519 billion",
      "cast":["Robert Downey Jr.","Chrris Evans","Mark Ruffalo","Chris Hemsworth","Scarlett Johansson","Tom Hiddleston","Samuel L. Jackson"],
    "posterSource":"TheAvengers.jpeg",
    "movieLink":"https://www.disneyplus.com/movies/marvel-studios-thor/1p4vdKzTuhzr",
      "synopsis":"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "trailerLink":"https://www.youtube.com/embed/eOrNdBpGMv8",
    "specificStyleSheet":"TheAvengersStyles"


  },
]


// console.log(mcuMovieDatabase[0]["Title"]);

function writeToPage(thingToWrite,placeToWrite){
  placeToWrite.innerText = thingToWrite;
}

function organizeJSON(organizeThisJSON){
  let movieGridDiv = document.createElement("DIV");
    movieGridDiv.classList.add('movieGridStyles');
    movieGridDiv.classList.add(organizeThisJSON['specificStyleSheet']);


    let movieAttributes = document.createElement("DIV");
      movieAttributes.classList.add('movieAttributeStyles');


  let listOfMovies = document.createElement("H1");
  listOfMovies.innerText=organizeThisJSON['Title'];
  listOfMovies.classList.add('movieAttributesHeaderStyles');

  movieAttributes.appendChild(listOfMovies);
  // movieGrid.appendChild(movieGridDiv);

  let listOfSynopsis = document.createElement("p");
  listOfSynopsis.innerText=organizeThisJSON["synopsis"];
  listOfSynopsis.classList.add('synopsisStyle');
  movieAttributes.appendChild(listOfSynopsis);


  let listOfReleaseDate = document.createElement("p");
  listOfReleaseDate.innerText="Released on "+organizeThisJSON["Release date"];
  listOfReleaseDate.classList.add('movieAttributesParagraphStyles');

  movieAttributes.appendChild(listOfReleaseDate);
  // movieGrid.appendChild(movieGridDiv);

  let listOfBudget = document.createElement("p");
  listOfBudget.innerText="Budget: "+organizeThisJSON["Budget"];
  listOfBudget.classList.add('movieAttributesParagraphStyles');

  movieAttributes.appendChild(listOfBudget);

  let listOfBoxOffice = document.createElement("p");
  listOfBoxOffice.innerText="Box Office Earnings: "+organizeThisJSON["Box Office"];
  listOfBoxOffice.classList.add('movieAttributesParagraphStyles');

  movieAttributes.appendChild(listOfBoxOffice);

  let directedBy = document.createElement("p");
  directedBy.classList.add('movieAttributesParagraphStyles');
  directedBy.innerText="Directed by: ";

  let listOfDirectors = document.createElement("a");
  listOfDirectors.innerText=organizeThisJSON["Director"];
  listOfDirectors.setAttribute('href', organizeThisJSON["DirectorLink"]);
  listOfDirectors.classList.add('directorLinkStyle');
  // adapted from https://stackoverflow.com/questions/29019925/creating-an-href-on-returned-json-data/29020038
  directedBy.appendChild(listOfDirectors);
    movieAttributes.appendChild(directedBy);
    movieGridDiv.appendChild(movieAttributes);
  movieGrid.appendChild(movieGridDiv);
  // movieAttributes.style.border="2px solid blue";
  movieAttributes.classList.add('movieAttributeStyles');


  movieGridDiv.style.border="2px solid #636e72";
  movieGridDiv.classList.add('movieGridStyles');





  let pictureHolderDiv = document.createElement("DIV");
  pictureHolderDiv.innerText="";
  movieGridDiv.appendChild(pictureHolderDiv);
  pictureHolderDiv.classList.add('pictureDivStyles');


  let moviePoster = document.createElement("IMG");
    moviePoster.classList.add("moviePosterStyles");
    moviePoster.src = organizeThisJSON['posterSource'];



let linkToMovie = document.createElement("a");
linkToMovie.href=organizeThisJSON["movieLink"];
linkToMovie.appendChild(moviePoster)
// link image from https://stackoverflow.com/questions/17049455/javascript-how-do-i-make-a-javascript-image-link-to-a-page

pictureHolderDiv.appendChild(linkToMovie);
let embedTrailer = document.createElement("iframe");
embedTrailer.setAttribute("src",organizeThisJSON["trailerLink"]);
embedTrailer.classList.add('embedTrailerStyle');
pictureHolderDiv.appendChild(embedTrailer);

let castHeader = document.createElement("p");
castHeader.classList.add('castHeaderStyle');
castHeader.innerText="Starring";
movieAttributes.appendChild(castHeader);



//cast

for (let i=0; i<organizeThisJSON["cast"].length;i++){
  let currentCastMember = organizeThisJSON["cast"][i];
  let newCastListItem = document.createElement("LI");
  newCastListItem.innerText=currentCastMember;
  newCastListItem.classList.add('castListStyle');

  movieAttributes.appendChild(newCastListItem);
}


}
