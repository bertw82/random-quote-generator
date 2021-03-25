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
 * get random quote from quotes array
***/

const getRandomQuote = () => { 
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * `printQuote` function
 * print random quote to page
 * if there is a citation and year also add those
***/

function printQuote() { 
  const quoteObj = getRandomQuote();
  // add quote and source
  let quoteHTML = `
  <p class="quote">${quoteObj.quote}</p>
  <p class="source">${quoteObj.source}
  `;
  if (quoteObj.citation) { 
    quoteHTML += `<span class="citation">${quoteObj.citation}</span>`;
  }
  if (quoteObj.year) { 
    quoteHTML += `<span class="year">${quoteObj.year}</span>`;
  }
  quoteHTML += `</p>`;
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
  endSlideShow();
  startSlideShow();
};

/***
 * `randomColor` function
 * change background color of quotes with specific colors in an array
***/

function randomColorPicker() { 
  const colors = [ // some colors from https://clrs.cc/
    '#bfbfbf',
    '#e6c700',
    '#004080',
    '#00e663',
    '#4dccff',
    '#0074d9',
    '#39cccc',
    '#3d9970',
    '#2ecc40',
    '#ff4136',
    '#85144b',
    '#b10dc9',
    '#f012be',
    '#8c8c8c'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const body = document.querySelector('body');
  body.style.backgroundColor = randomColor;
};

/***
 * `slideShow` function
 * refresh quotes at regular intervals
 * end refresh with clearInterval
***/

let interval;

function startSlideShow() { 
  interval = setInterval(printQuote, 10000);
};

function endSlideShow() { 
  clearInterval(interval);
}

startSlideShow();

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);




