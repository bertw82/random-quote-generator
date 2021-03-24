/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

"use strict";

/*** 
 * `quotes` array 
***/
const quotes = [ // array of quotes
  {
    quote: 'I don\'t believe that grief passes away. It has its time and place forever. More time is added to it; it becomes a story within a story.',
    source: 'Wendell Berry',
    citation: 'Jayber Crow',
    year: '2000',
    tags: [
      'grief',
      'consolation',
      'peace'
    ]
  },
  {
    quote: 'Injustice anywhere is a threat to justice everywhere.',
    source: 'Dr. Martin Luther King Jr.',
    citation: 'Letter from the Birmingham Jail',
    year: '1963',
    tags: [
      'justice',
      'civil rights',
    ]
  },
  {
    quote: 'Gandalf! I thought you were dead! But then I thought I was dead myself. Is everything sad going to come untrue?',
    source: 'Samwise Gamgee',
    citation: 'The Return of the King',
    year: '1995',
    tags: [
      'hope',
      'love',
      'consolation'
    ]
  },
  {
    quote: 'I start in the middle of a sentence and move both directions at once.',
    source: 'John Coltrane',
    tags: [
      'music',
      'jazz'
    ]
  },
  {
    quote: 'Remember that hope is a good thing, Red, maybe the best of things, and no good thing ever dies.',
    source: 'Stephen King',
    citation: 'The Shawshank Redemption',
    year: '1982',
    tags: [
      'hope',
      'prison',
      'escape'
    ]
  },
  {
    quote: 'Fix bayonets!',
    source: 'Joshua Lawrence Chamberlain',
    year: '1863',
    tags: [
      'courage',
      'war',
      'fearlessness'
    ]
  },
  {
    quote: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    source: 'Antoine de Saint-Exupery',
    citation: 'The Little Prince',
    year: '1943',
    tags: [
      'love',
      'heart',
      'essential'
    ]
  },
  {
    quote: 'This is your life, are you who you want to be?',
    source: 'Switchfoot',
    citation: 'The Beautiful Letdown',
    year: '2003',
    tags: [
      'life',
      'question'
    ]
  },
  {
    quote: 'Two roads diverged in a wood, and I--I took the one less traveled by, And that has made all the difference.',
    source: 'Robert Frost',
    citation: 'The Road Not Taken',
    year: '1916',
    tags: [
      'courage',
      'life',
      'road'
    ]
  },
  {
    quote: 'One must always choose the lesser of two weevils',
    source: 'Captain Jack Aubrey',
    citation: 'Master and Commander: The Far Side of the World',
    year: '2003',
    tags: [
      'humor',
      'war',
    ]
  }
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => { // get random quote from quotes array
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * `printQuote` function
***/

function printQuote() { // print random quote to page
  const quoteObj = getRandomQuote();
  // add quote and source
  let quoteHTML = `
  <p class="quote">${quoteObj.quote}</p>
  <p class="source">${quoteObj.source}
  `;
  if (quoteObj.citation) { // if there is a citation then add that to html
    quoteHTML = quoteHTML + `<span class="citation">${quoteObj.citation}</span>`;
  }
  if (quoteObj.year) { // if there is a year then add that to html
    quoteHTML = quoteHTML + `<span class="year">${quoteObj.year}</span>`;
  }
  quoteHTML = quoteHTML + `</p>`;
  let tagsDiv = `<div class="tags-div">`;
  const tagsArray = quoteObj.tags;
  for (let i = 0; i < tagsArray.length; i++) {
    tagsDiv = tagsDiv + `<span class="tags">#${tagsArray[i]}</span>`;
  }
  tagsDiv = tagsDiv + `</div>`;
  quoteHTML = quoteHTML + tagsDiv;
  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = quoteHTML;
  randomColorPicker();
};

/***
 * `randomColor` function
***/

function randomColorPicker() { // change background color of quotes
  const colors = [
    'dodgerblue',
    'purple',
    'red',
    'forestgreen',
    'coral',
    'royalblue',
    'orange',
    'plum',
    'rgb(58, 193, 98)',
    'teal',
    'lightblue',
    'slategrey',
    'peru'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const body = document.querySelector('body');
  body.style.backgroundColor = randomColor;
};

/***
 * `slideShow` function
***/

let interval;

function startSlideShow() { // refresh quotes at regular intervals
  interval = setInterval(printQuote, 10000);
};

function endSlideShow() { // end refresh
  clearInterval(interval);
}

startSlideShow();

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", endSlideShow, false);
document.getElementById('load-quote').addEventListener("click", startSlideShow, false);




